<script setup lang="ts">
import type { SubTurn, TimelineTurn } from '../../util/starrail/consts'

defineProps<{
  currentTurn: TimelineTurn | null
  currentResolvingSubTurn: SubTurn | null
  queue: TimelineTurn[]
}>()
</script>

<template>
  <g>
    <g class="current-turn">
      <g v-if="currentTurn?.character">
        <rect height="20" width="40" stroke="white" fill="grey" x="20" :y="10" />
        <image :href="currentTurn.character?.avatar" height="20" width="20" x="30" :y="10" />
      </g>
      <g v-for="(subTurn, i) in currentTurn?.subTurns" :key="subTurn.character.name + subTurn.type">
        <rect height="20" width="40" stroke="white" fill="grey" :x="60 + 40 * i" :y="10" />
        <image :href="subTurn.character.avatar" height="20" width="20" :x="70 + 40 * i" :y="10" />
      </g>
    </g>
    <g v-if="currentResolvingSubTurn" class="current-subturn">
      <rect height="20" width="40" stroke="white" fill="grey" x="20" :y="10" />
      <image
        :href="currentResolvingSubTurn.character?.avatar"
        height="20"
        width="20"
        x="30"
        :y="10"
      />
    </g>
    <g v-for="(turn, i) in queue" :key="turn.character?.name ?? '' + turn.timeUntil">
      <rect height="20" width="40" stroke="white" fill="grey" x="20" :y="i * 30 + 40" />
      <image :href="turn.character?.avatar" height="20" width="20" x="30" :y="i * 30 + 40" />
    </g>
  </g>
</template>
