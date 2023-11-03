import bailuAvatar from '../../assets/game/img/bailu-avatar.png'
import bailuBack from '../../assets/game/img/bailu-back.png'
import bailuFront from '../../assets/game/img/bailu-front.png'
import marchAvatar from '../../assets/game/img/march-avatar.png'
import marchBack from '../../assets/game/img/march-back.png'
import marchFront from '../../assets/game/img/march-front.png'
import stelleAvatar from '../../assets/game/img/stelle-avatar.png'
import stelleBack from '../../assets/game/img/stelle-back.png'
import stelleFront from '../../assets/game/img/stelle-front.png'
import {
  AttackType,
  Character,
  Elements,
  PlayerCharacter,
  SkillEffect,
  SubTurnType,
  TargetType
} from './consts'

export const stelle = new PlayerCharacter(
  'main-character',
  Elements.PHYSICAL,
  AttackType.MELEE,
  stelleAvatar,
  stelleBack,
  stelleFront,
  100,
  10,
  {
    targetType: TargetType.SPLASH_ENEMY,
    effect: SkillEffect.DAMAGE,
    attackType: AttackType.MELEE,
    modifier: 1.2,
    breakEfficiency: 2
  },
  120,
  100,
  {
    targetType: TargetType.RANDOM_ENEMY,
    hits: 3,
    effect: SkillEffect.DAMAGE,
    attackType: AttackType.RANGED,
    modifier: 2,
    breakEfficiency: 1
  }
)
export const bailu = new PlayerCharacter(
  'bailu',
  Elements.LIGHTNING,
  AttackType.MELEE,
  bailuAvatar,
  bailuBack,
  bailuFront,
  100,
  10,
  {
    targetType: TargetType.SINGLE_ALLY,
    effect: SkillEffect.HEAL,
    modifier: 10
  },
  110,
  100,
  {
    targetType: TargetType.ALL_ALLIES,
    hits: 3,
    effect: SkillEffect.HEAL,
    modifier: 20
  }
)

export const march = new PlayerCharacter(
  'march',
  Elements.ICE,
  AttackType.RANGED,
  marchAvatar,
  marchBack,
  marchFront,
  100,
  10,
  {
    targetType: TargetType.SINGLE_ALLY,
    effect: SkillEffect.SHIELD,
    modifier: 20
  },
  130,
  100,
  {
    targetType: TargetType.ALL_ENEMIES,
    effect: SkillEffect.DAMAGE,
    attackType: AttackType.RANGED,
    modifier: 2,
    breakEfficiency: 2
  },
  2,
  (trigger: string, self: Character) => {
    if (trigger === 'hit-shield') {
      const pc = self as PlayerCharacter
      // Retaliate
      if (pc.passiveCount && pc.passiveCount > 0) {
        pc.passiveCount -= 1
        return { type: SubTurnType.REACTION, character: self, damage: 5 }
      }
    }
    return null
  },
  (self: Character) => {
    ;(self as PlayerCharacter).passiveCount = 2
  }
)
