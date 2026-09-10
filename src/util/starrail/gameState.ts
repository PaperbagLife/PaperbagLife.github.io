import { computed, reactive } from 'vue'
import {
  ALLY_VIEW_TOP_PADDING,
  BASIC_ATTACK_ENERGY_GAIN,
  BREAK_DAMAGE,
  BREAK_DELAY,
  CameraMode,
  type CameraState,
  Character,
  CharacterType,
  type DamageNumber,
  Elements,
  Enemy,
  ENEMY_BETWEEN_PADDING,
  ENEMY_CENTER_Y,
  ENEMY_SIZE,
  type FocusedTarget,
  GAME_WIDTH,
  type HealNumber,
  HIT_ENERGY_REGEN,
  MAX_SKILLPOINTS,
  MULTIHIT_DELAY,
  NUMBER_DELETE_DELAY,
  NUMBER_DRIFT_Y,
  PLAYER_BETWEEN_PADDING,
  PLAYER_DEFAULT_X_POSITION,
  PLAYER_IMAGE_WIDTH,
  PlayerButton,
  PlayerCharacter,
  type PlayerInput,
  PlayerTurnAction,
  SkillEffect,
  type SubTurn,
  SubTurnType,
  type TargetMarkers,
  TargetType,
  TIMELINE_DISTANCE,
  type TimelineTurn,
  TURN_TIME,
  type TurnState,
  TurnStateEnum,
} from './consts'
import { bailu, march, stelle } from './playerCharacters'
import { fireShadeWalker, flameSpawn, frostSpawn, frostSpawn2, frostSpawn4 } from './enemies'

import { delay, findCharacterIndex, getRandomInt, range } from './utils'

// Combat, Damage related logic
class CombatManager {
  static enemyAttackAnimation(idx: number, element: Elements, damage: number) {
    gameState.attackingEnemy = idx
    setTimeout(() => {
      gameState.attackingEnemy = null
      makeDamageNumber(damage, CharacterType.PLAYER, 0, element)
    }, TURN_TIME / 2)
  }
  static resolveDamageOnPlayer(playerIdx: number, damage: number) {
    const subTurns: SubTurn[] = []
    const player = gameState.playerCharacters[playerIdx]
    let postShieldDamage = 0
    // Ask for subturn
    gameState.playerCharacters.forEach((pc) => {
      if (!pc.reaction) return
      if (player.shield > 0) {
        const subTurn = pc.reaction('hit-shield')
        if (subTurn != null) {
          subTurns.push(subTurn)
        }
      }
      // More trigger conditions, I guess
    })
    if (damage > player.shield) {
      postShieldDamage = damage - player.shield
      player.shield = 0
    } else {
      player.shield -= damage
    }
    player.hp -= postShieldDamage
    player.energy = Math.min(player.energy + HIT_ENERGY_REGEN, player.maxEnergy)
    return subTurns
  }
  static resolveDamageOnEnemy(
    enemyIdx: number,
    damage: number,
    element: Elements,
    breakEfficiency?: number
  ) {
    // breakEfficiency only missing if skill is heal or shield
    const enemy = gameState.enemies[enemyIdx]
    if (!enemy) {
      return
    }
    enemy.hp -= damage
    makeDamageNumber(damage, CharacterType.ENEMY, enemyIdx, element)
    if (enemy.weakness.includes(element) && enemy.toughness != 0) {
      enemy.toughness -= breakEfficiency ?? 1
      if (enemy.toughness <= 0) {
        // a break happened. TODO: Depending on what the element that broke it, apply debuff
        enemy.hp -= BREAK_DAMAGE
        makeDamageNumber(damage, CharacterType.ENEMY, enemyIdx, element, true)
        const enemyTurnIdx = gameState.queue.findIndex(
          (turnEntry) => turnEntry.character?.name === enemy.name
        )
        if (enemyTurnIdx === -1) {
          console.log('impossible, no enemy turn on timeline')
          return
        }
        gameState.queue[enemyTurnIdx].timeUntil += BREAK_DELAY
        Timeline.sortTimeline()
      }
    }
  }
  static async resolveEnemyMove() {
    const enemy = gameState.turnCharacter as Enemy
    if (enemy.toughness <= 0) {
      enemy.toughness = enemy.maxToughness
    }
    const damage = enemy.attack
    const target = getRandomInt(gameState.playerCharacters.length)
    gameState.cameraState.focus = target
    this.enemyAttackAnimation(findCharacterIndex(enemy, gameState), enemy.element, damage)
    await delay(TURN_TIME)
    return this.resolveDamageOnPlayer(target, damage)
  }

  static async resolvePlayerSkill() {
    const player = gameState.turnCharacter as PlayerCharacter
    gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
    if (player.skill.effect === SkillEffect.DAMAGE) {
      const damage = player.attack * player.skill.modifier
      const target = gameState.focusedTarget.mainTarget
      // Depending on the type of the skill do differnt calculations here
      switch (player.skill.targetType) {
        case TargetType.SINGLE_ENEMY: {
          gameState.playerAttackTarget = target
          gameState.playerTurnAction = PlayerTurnAction.SKILL
          await delay(TURN_TIME)
          this.resolveDamageOnEnemy(target, damage, player.element, player.skill.breakEfficiency)
          break
        }
        case TargetType.SPLASH_ENEMY: {
          gameState.playerAttackTarget = target
          gameState.playerTurnAction = PlayerTurnAction.SKILL
          await delay(TURN_TIME)
          this.resolveDamageOnEnemy(target, damage, player.element, player.skill.breakEfficiency)
          if (target > 0) {
            this.resolveDamageOnEnemy(
              target - 1,
              damage,

              player.element,
              player.skill.breakEfficiency
            )
          }
          if (target < gameState.enemies.length - 1) {
            this.resolveDamageOnEnemy(
              target + 1,
              damage,
              player.element,
              player.skill.breakEfficiency
            )
          }
          break
        }
        case TargetType.ALL_ENEMIES: {
          gameState.playerAttackTarget = target
          gameState.playerTurnAction = PlayerTurnAction.SKILL
          await delay(TURN_TIME)
          for (let i = 0; i < gameState.enemies.length; i += 1) {
            this.resolveDamageOnEnemy(i, damage, player.element, player.skill.breakEfficiency)
          }
          break
        }
        case TargetType.RANDOM_ENEMY: {
          await delay(TURN_TIME)
          for (let i = 0; i < (player.skill.hits ?? 1); i += 1) {
            const enemyIdx = getRandomInt(gameState.enemies.length)
            this.resolveDamageOnEnemy(
              enemyIdx,
              damage,
              player.element,
              player.skill.breakEfficiency
            )
          }
        }
      }
    } else if (player.skill.effect === SkillEffect.HEAL) {
      switch (player.skill.targetType) {
        case TargetType.SINGLE_ALLY: {
          const target = gameState.focusedTarget.mainTarget
          const hp = gameState.playerCharacters[target].hp
          makeHealNumber(
            Math.min(
              gameState.playerCharacters[target].maxHp - gameState.playerCharacters[target].hp,
              player.skill.modifier
            ),
            CharacterType.PLAYER,
            target
          )
          gameState.playerCharacters[target].hp = Math.min(
            hp + player.skill.modifier,
            gameState.playerCharacters[target].maxHp
          )
          break
        }
        case TargetType.ALL_ALLIES: {
          gameState.playerCharacters.forEach(
            (pc) => (pc.hp = Math.min(pc.maxHp, pc.hp + player.skill.modifier))
          )
        }
      }
    } else if (player.skill.effect === SkillEffect.SHIELD) {
      switch (player.skill.targetType) {
        case TargetType.SINGLE_ALLY: {
          const target = gameState.focusedTarget.mainTarget
          gameState.playerCharacters[target].shield += player.skill.modifier
          break
        }
        case TargetType.ALL_ALLIES: {
          gameState.playerCharacters.forEach((pc) => (pc.shield += player.skill.modifier))
        }
      }
    }
    gameState.playerAttackTarget = null
    gameState.playerTurnAction = null
    await delay(TURN_TIME)
    player.energy = Math.min(player.energy + 30, player.maxEnergy)
    gameState.cameraState.mode = CameraMode.DEFAULT
    gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
  }

  static async resolvePlayerAttack() {
    const player = gameState.turnCharacter as PlayerCharacter
    await delay(200) // animation delay??
    gameState.playerAttackTarget = gameState.focusedTarget.mainTarget
    gameState.playerTurnAction = PlayerTurnAction.ATTACK
    await delay(TURN_TIME)
    player.energy = Math.min(player.energy + BASIC_ATTACK_ENERGY_GAIN, player.maxEnergy)
    const damage = player.attack
    const target = gameState.focusedTarget.mainTarget
    // Assume basic attack always single target (TODO p2: change this paradigm later)
    this.resolveDamageOnEnemy(target, damage, player.element, 1)
    await delay(TURN_TIME)
    gameState.playerAttackTarget = null
    gameState.playerTurnAction = null
  }

  static async resolvePlayerUlt() {
    const player = gameState.turnCharacter as PlayerCharacter
    if (player.ult.effect === SkillEffect.DAMAGE) {
      const damage = player.attack * player.ult.modifier
      const target = gameState.focusedTarget.mainTarget
      // Depending on the type of the skill do differnt calculations here
      switch (player.ult.targetType) {
        case TargetType.SINGLE_ENEMY: {
          gameState.playerAttackTarget = target
          gameState.playerTurnAction = PlayerTurnAction.ULT
          await delay(TURN_TIME)
          this.resolveDamageOnEnemy(target, damage, player.element, player.ult.breakEfficiency)
          break
        }
        case TargetType.SPLASH_ENEMY: {
          gameState.playerAttackTarget = target
          gameState.playerTurnAction = PlayerTurnAction.ULT
          await delay(TURN_TIME)
          this.resolveDamageOnEnemy(target, damage, player.element, player.ult.breakEfficiency)
          if (target > 0) {
            this.resolveDamageOnEnemy(
              target - 1,
              damage,
              player.element,
              player.ult.breakEfficiency
            )
          }
          if (target < gameState.enemies.length - 1) {
            this.resolveDamageOnEnemy(
              target + 1,
              damage,
              player.element,
              player.ult.breakEfficiency
            )
          }
          break
        }
        case TargetType.ALL_ENEMIES: {
          gameState.playerAttackTarget = target
          gameState.playerTurnAction = PlayerTurnAction.ULT
          await delay(TURN_TIME)
          gameState.enemies.forEach((_, i) => {
            this.resolveDamageOnEnemy(i, damage, player.element, player.ult.breakEfficiency)
          })
          break
        }
        case TargetType.RANDOM_ENEMY: {
          await delay(TURN_TIME)
          for (let i = 0; i < (player.ult.hits ?? 1); i += 1) {
            const enemyIdx = getRandomInt(gameState.enemies.length)
            await delay(MULTIHIT_DELAY)
            this.resolveDamageOnEnemy(enemyIdx, damage, player.element, player.ult.breakEfficiency)
          }
        }
      }
    } else if (player.ult.effect === SkillEffect.HEAL) {
      switch (player.ult.targetType) {
        case TargetType.SINGLE_ALLY: {
          const target = gameState.focusedTarget.mainTarget
          const hp = gameState.playerCharacters[target].hp
          makeHealNumber(
            Math.min(
              gameState.playerCharacters[target].maxHp - gameState.playerCharacters[target].hp,
              player.skill.modifier
            ),
            CharacterType.PLAYER,
            target
          )
          gameState.playerCharacters[target].hp = Math.min(
            hp + player.skill.modifier,
            gameState.playerCharacters[target].maxHp
          )
          break
        }
        case TargetType.ALL_ALLIES: {
          gameState.playerCharacters.forEach((pc, i) => {
            makeHealNumber(
              Math.min(
                gameState.playerCharacters[i].maxHp - gameState.playerCharacters[i].hp,
                player.skill.modifier
              ),
              CharacterType.PLAYER,
              i
            )
            pc.hp = Math.min(pc.maxHp, pc.hp + player.skill.modifier)
          })
        }
      }
    } else if (player.skill.effect === SkillEffect.SHIELD) {
      switch (player.skill.targetType) {
        case TargetType.SINGLE_ALLY: {
          const target = gameState.focusedTarget.mainTarget
          gameState.playerCharacters[target].shield += player.skill.modifier
          break
        }
        case TargetType.ALL_ALLIES: {
          gameState.playerCharacters.forEach((pc) => (pc.shield += player.skill.modifier))
        }
      }
    }
    gameState.playerAttackTarget = null
    gameState.playerTurnAction = null
    await delay(TURN_TIME)
    player.energy += 5
    gameState.cameraState.mode = CameraMode.DEFAULT
    gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
  }
}

// Class for organizing functions to do with turns
class TurnManager {
  static async resolveTurn(turn: TimelineTurn) {
    gameState.currentTurn = turn
    gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
    gameState.focusedTarget.mainTarget = Math.min(
      gameState.focusedTarget.mainTarget,
      gameState.enemies.length - 1
    )
    gameState.currentResolvingSubTurn = null
    let enemyIdx = -1
    if (!turn.character) return
    if (turn.character.type === CharacterType.ENEMY) {
      // Check for insert ult
      if (gameState.ultSignaled != null) {
        // put the current turn back
        gameState.queue.unshift(turn)
        gameState.currentTurn = {
          character: undefined,
          index: gameState.ultSignaled,
          timeUntil: 0,
          subTurns: [
            {
              type: SubTurnType.ULT,
              character: gameState.playerCharacters[gameState.ultSignaled],
            },
          ],
        }
        gameState.turnCharacter = null
        gameState.ultSignaled = null
        gameState.playerInput = null
      } else {
        const enemy = turn.character as Enemy
        gameState.turnState = { resolvingSubTurn: false, stateEnum: TurnStateEnum.ENEMY_TURN }
        gameState.turnCharacter = enemy
        enemyIdx = turn.index
        const subTurns = await CombatManager.resolveEnemyMove()
        gameState.currentTurn.subTurns.push(...subTurns)
      }
    } else {
      // player turn
      const player = turn.character as PlayerCharacter
      gameState.cameraState.focus = turn.index
      gameState.turnCharacter = player
      gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
      // Block until an action is taken
      let turnTaken = false
      while (!turnTaken) {
        // Check for insert ult
        if (gameState.ultSignaled != null) {
          // put the current turn back
          gameState.queue.unshift(turn)
          gameState.currentTurn = {
            character: undefined,
            index: gameState.ultSignaled,
            timeUntil: 0,
            subTurns: [
              {
                type: SubTurnType.ULT,
                character: gameState.playerCharacters[gameState.ultSignaled],
              },
            ],
          }
          gameState.turnCharacter = null
          gameState.ultSignaled = null
          gameState.playerInput = null
          break
        }
        if (gameState.playerInput != null) {
          switch (gameState.playerInput.type) {
            case PlayerButton.ATTACK: {
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
                // Fire basic attack
                gameState.skillPoints = Math.min(gameState.skillPoints + 1, MAX_SKILLPOINTS)
                await CombatManager.resolvePlayerAttack()
                turnTaken = true
                break
              }
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
                // Go to default state
                gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_DEFAULT
                gameState.cameraState.mode = CameraMode.DEFAULT
                gameState.cameraState.focus = turn.index
                gameState.focusedTarget.targetType = TargetType.SINGLE_ENEMY
              }
              break
            }
            case PlayerButton.SKILL: {
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING) {
                // Fire skill
                gameState.skillPoints -= 1
                await CombatManager.resolvePlayerSkill()
                turnTaken = true
                break
              }
              if (gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT) {
                // Go to skill ready state
                gameState.turnState.stateEnum = TurnStateEnum.PLAYER_TURN_SKILL_PENDING
                gameState.focusedTarget.targetType = player.skill.targetType
                if (
                  player.skill.targetType === TargetType.SINGLE_ALLY ||
                  player.skill.targetType === TargetType.ALL_ALLIES
                ) {
                  gameState.focusedTarget.mainTarget = gameState.currentTurn.index
                }
                if (
                  player.skill.targetType === TargetType.ALL_ALLIES ||
                  player.skill.targetType === TargetType.SINGLE_ALLY
                ) {
                  gameState.cameraState.mode = CameraMode.ALLIES
                  gameState.cameraState.focus = turn.index
                }
              }
              break
            }
          }
          gameState.playerInput = null
        }
        await delay(200)
      }
    }
    if (!gameState.currentTurn) return
    if (gameState.turnCharacter) {
      gameState.turnCharacter.turnEnd()
      Timeline.enqueue(gameState.turnCharacter, turn.index)
    }
    gameState.turnCharacter = null

    let currentSubTurn = null
    while (gameState.currentTurn.subTurns.length > 0) {
      gameState.currentTurn.subTurns.sort((a, b) =>
        a.type === b.type ? 0 : a.type === SubTurnType.REACTION ? -1 : 1
      )
      currentSubTurn = gameState.currentTurn.subTurns.shift()
      // handle ult and reactions here, kinda need to sort them
      if (!currentSubTurn) break
      gameState.currentResolvingSubTurn = currentSubTurn
      gameState.turnCharacter = currentSubTurn.character
      if (currentSubTurn.type === SubTurnType.REACTION) {
        gameState.cameraState.focus = findCharacterIndex(gameState.turnCharacter, gameState)
        // Assume only player can have reactions
        gameState.focusedTarget.mainTarget = enemyIdx
        const reactPlayer = gameState.turnCharacter as PlayerCharacter
        gameState.turnState.resolvingSubTurn = true
        if (currentSubTurn.damage && enemyIdx !== -1) {
          gameState.playerAttackTarget = enemyIdx
          gameState.playerTurnAction = PlayerTurnAction.ATTACK
          await delay(1000)
          CombatManager.resolveDamageOnEnemy(
            enemyIdx,
            currentSubTurn.damage,
            reactPlayer.element,
            1
          )
          await delay(TURN_TIME - 1000)
        }
      }
      if (currentSubTurn.type === SubTurnType.ULT) {
        gameState.turnState.stateEnum = TurnStateEnum.PLAYER_ULT_PENDING
        let ultFired = false
        // Adjust camera state
        const player = gameState.turnCharacter as PlayerCharacter
        gameState.cameraState.focus = gameState.playerCharacters.findIndex(
          (c) => c.name === player.name
        )
        if (
          player.ult.targetType === TargetType.ALL_ALLIES ||
          player.ult.targetType === TargetType.SINGLE_ALLY
        ) {
          gameState.cameraState.mode = CameraMode.ALLIES
          gameState.cameraState.focus = turn.index
        }
        gameState.focusedTarget.targetType = player.ult.targetType
        while (!ultFired) {
          if (gameState.playerInput != null && gameState.playerInput.type === PlayerButton.ATTACK) {
            ultFired = true
            gameState.playerInput = null
            await CombatManager.resolvePlayerUlt()
          }
          await delay(200)
        }
      }
    }
  }
}

// Class for organizing functions to do with timeline
class Timeline {
  static sortTimeline() {
    gameState.queue.sort((a, b) => a.timeUntil - b.timeUntil)
  }
  static enqueue(character: Character, index: number) {
    gameState.queue.push({
      character,
      index,
      timeUntil: TIMELINE_DISTANCE / character.speed,
      subTurns: [],
    })
  }

  static getNextTurn() {
    const turn = gameState.queue.shift()
    gameState.queue.forEach((futureTurn) => (futureTurn.timeUntil -= turn?.timeUntil ?? 0))
    if (turn) {
      turn.timeUntil = 0
      return turn
    }
  }

  static ult(index: number) {
    if (index > gameState.playerCharacters.length) return
    const character = gameState.playerCharacters[index]
    if (character.energy === character.maxEnergy) {
      character.energy = 0
      // Either append ult turn at the end of subTurn or immediately resolve ult turn
      if (
        gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_DEFAULT ||
        gameState.turnState.stateEnum === TurnStateEnum.PLAYER_TURN_SKILL_PENDING
      ) {
        // Immediately resolve ult turn
        gameState.ultSignaled = index
      } else {
        gameState.currentTurn?.subTurns.push({
          type: SubTurnType.ULT,
          character: gameState.playerCharacters[index],
        })
      }
    }
  }
}

// Class for maintaining the main gamestate
export class GameState {
  cameraState: CameraState
  turnState: TurnState = { stateEnum: TurnStateEnum.EMPTY, resolvingSubTurn: false }
  turnCharacter: Character | null = null
  queue: TimelineTurn[]
  attackingEnemy: number | null = null
  playerAttackTarget: number | null = null
  playerTurnAction: PlayerTurnAction | null = null
  playerCharacters: PlayerCharacter[]
  enemies: Enemy[]
  skillPoints: number
  playerInput: PlayerInput | null = null
  focusedTarget: FocusedTarget = { mainTarget: 0, targetType: TargetType.SINGLE_ENEMY }
  currentTurn: TimelineTurn | null = null
  currentResolvingSubTurn: SubTurn | null = null
  ultSignaled: number | null = null
  gameOver = false

  constructor(playerCharacters: PlayerCharacter[], enemies: Enemy[]) {
    this.cameraState = {
      mode: CameraMode.DEFAULT,
      focus: 0,
    }
    this.queue = []
    this.playerCharacters = playerCharacters
    this.enemies = enemies
    this.skillPoints = 3
  }
  async initGame() {
    this.playerCharacters.forEach((char, i) => Timeline.enqueue(char, i))
    this.enemies.forEach((char, i) => Timeline.enqueue(char, i))
    Timeline.sortTimeline()
    while (!this.gameOver) {
      const nextTurn = Timeline.getNextTurn()
      if (!nextTurn) {
        console.log('no more turns??')
        return
      }
      await TurnManager.resolveTurn(nextTurn)
      // Check deaths
      gameState.enemies = gameState.enemies.filter((enemy) => enemy.isAlive())
      gameState.playerCharacters = gameState.playerCharacters.filter((player) => player.isAlive())
      gameState.queue = gameState.queue.filter((turn) => turn.character?.isAlive())
      if (gameState.enemies.length === 0) {
        this.gameOver = true
      }
    }
  }
}

let damageNumberIndex = 0
let healNumberIndex = 0
const damageNumbers = reactive(new Map<number, DamageNumber>())
const healNumbers = reactive(new Map<number, HealNumber>())
function makeDamageNumber(
  damage: number,
  characterType: CharacterType,
  index: number,
  element: Elements,
  differntLocation?: boolean
) {
  damageNumberIndex += 1
  const damageNumber = {
    damage,
    x:
      characterType === CharacterType.ENEMY
        ? enemyXPositions.value[index] + ENEMY_SIZE / 2
        : PLAYER_DEFAULT_X_POSITION + PLAYER_IMAGE_WIDTH / 2,
    y:
      characterType === CharacterType.ENEMY
        ? differntLocation
          ? ENEMY_CENTER_Y + 10
          : ENEMY_CENTER_Y
        : ALLY_VIEW_TOP_PADDING * 3,
    type: element,
  }
  damageNumbers.set(damageNumberIndex, damageNumber)
  const thisIdx = damageNumberIndex
  setTimeout(() => {
    const numb = damageNumbers.get(thisIdx)
    if (numb) {
      numb.y -= NUMBER_DRIFT_Y
    }
  })
  setTimeout(() => {
    damageNumbers.delete(thisIdx)
  }, NUMBER_DELETE_DELAY)
}
function makeHealNumber(
  heal: number,
  characterType: CharacterType,
  index: number,
  differntLocation?: boolean
) {
  healNumberIndex += 1
  const healNumber = {
    heal,
    x:
      characterType === CharacterType.ENEMY
        ? enemyXPositions.value[index] + ENEMY_SIZE / 2
        : playerXPositions.value[index] + PLAYER_IMAGE_WIDTH / 2,
    y:
      characterType === CharacterType.ENEMY
        ? differntLocation
          ? ENEMY_CENTER_Y + 10
          : ENEMY_CENTER_Y
        : ALLY_VIEW_TOP_PADDING * 3,
  }
  healNumbers.set(healNumberIndex, healNumber)
  const thisIdx = healNumberIndex
  setTimeout(() => {
    const numb = healNumbers.get(thisIdx)
    if (numb) {
      numb.y -= NUMBER_DRIFT_Y
    }
  })
  setTimeout(() => {
    healNumbers.delete(thisIdx)
  }, NUMBER_DELETE_DELAY)
}

const targetMarkers = computed<TargetMarkers>(() => {
  const mainTarget = gameState.focusedTarget.mainTarget
  switch (gameState.focusedTarget.targetType) {
    case TargetType.SINGLE_ALLY:
      return { main: [gameState.focusedTarget.mainTarget], sub: [] }
    case TargetType.ALL_ALLIES: {
      return {
        main: range(gameState.playerCharacters.length),
        sub: [],
      }
    }
    case TargetType.SINGLE_ENEMY:
      return { main: [mainTarget], sub: [] }
    case TargetType.SPLASH_ENEMY: {
      const targets = { main: [mainTarget], sub: [] as number[] }
      if (mainTarget - 1 >= 0) {
        targets.sub.push(mainTarget - 1)
      }
      if (mainTarget + 1 < gameState.enemies.length) {
        targets.sub.push(mainTarget + 1)
      }
      return targets
    }
    case TargetType.ALL_ENEMIES:
    case TargetType.RANDOM_ENEMY: {
      return {
        main: range(gameState.enemies.length),
        sub: [],
      }
    }
    default:
      return { main: [], sub: [] }
  }
})

const playerXPositions = computed<number[]>(() => {
  const START_LOCATION = 200
  const space = GAME_WIDTH - START_LOCATION
  const sidePadding =
    (space -
      gameState.playerCharacters.length * (PLAYER_IMAGE_WIDTH + PLAYER_BETWEEN_PADDING) -
      PLAYER_BETWEEN_PADDING) /
    2
  const result: number[] = []
  for (let i = 0; i < gameState.playerCharacters.length; i++) {
    result.push(
      START_LOCATION +
        sidePadding +
        PLAYER_BETWEEN_PADDING +
        i * (PLAYER_IMAGE_WIDTH + PLAYER_BETWEEN_PADDING)
    )
  }
  return result
})

const enemyXPositions = computed<number[]>(() => {
  const startLocation =
    GAME_WIDTH -
    (gameState.enemies.length * (ENEMY_SIZE + ENEMY_BETWEEN_PADDING) + ENEMY_BETWEEN_PADDING * 2)
  const result: number[] = []
  for (let i = 0; i < gameState.enemies.length; i++) {
    result.push(startLocation + ENEMY_BETWEEN_PADDING + i * (ENEMY_SIZE + ENEMY_BETWEEN_PADDING))
  }
  return result
})

const gameState = reactive(
  new GameState(
    [stelle, bailu, march],
    [flameSpawn, frostSpawn2, fireShadeWalker, frostSpawn4, frostSpawn]
  )
)

export function activateUlt(idx: number) {
  Timeline.ult(idx)
}

export function useGameState() {
  return {
    gameState,
    enemyXPositions,
    playerXPositions,
    targetMarkers,
    healNumbers,
    damageNumbers,
    activateUlt,
  }
}
