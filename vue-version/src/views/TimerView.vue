<script setup lang="ts">
import { computed, ref } from 'vue'
type ExerciseEntry = IntervalExercise | RepsExercise | Rest
enum ExerciseType {
  Reps = 'reps',
  Interval = 'interval',
  Rest = 'rest',
}
type RepsExercise = {
  name: string
  type: ExerciseType.Reps
  reps: number
  weight?: string
}
type IntervalExercise = {
  name: string
  type: ExerciseType.Interval
  duration: number
}
type Rest = {
  name: string
  type: ExerciseType.Rest
  duration: number
}

const exercises: ExerciseEntry[] = [
  { name: 'Treadmill', type: ExerciseType.Interval, duration: 300 },
  { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
  { name: 'Inchworm', type: ExerciseType.Interval, duration: 20 },
  { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
  { name: 'Alternating Arm Leg reach', type: ExerciseType.Reps, reps: 20 },
  { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
  { name: 'Inchworm', type: ExerciseType.Interval, duration: 20 },
  { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
  { name: 'Alternating Arm Leg reach', type: ExerciseType.Reps, reps: 20 },
  { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
  { name: 'Machine Hamstring Curl', type: ExerciseType.Reps, reps: 12, weight: '40lbs' },
  { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
  { name: 'Machine Hamstring Curl', type: ExerciseType.Reps, reps: 12, weight: '40lbs' },
  { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
]
const currentExerciseIndex = ref(0)
const currentExercise = computed(() => exercises[currentExerciseIndex.value])

const nextExercisePreview = computed(() => {
  // Find next non-rest exercise
  let nextIndex = currentExerciseIndex.value + 1
  while (nextIndex < exercises.length && exercises[nextIndex].type === ExerciseType.Rest) {
    nextIndex++
  }
  return nextIndex < exercises.length ? exercises[nextIndex] : null
})

const totalSeconds = ref(0)
const timer = ref<number | null>(null)
const isTimerRunning = ref(false)

function setTimer(seconds: number) {
  totalSeconds.value = seconds
}

function clearTimer() {
  totalSeconds.value = 0
  isTimerRunning.value = false
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

function playTimer() {
  if (currentExercise.value.type === ExerciseType.Reps) {
    return
  }
  if (timer.value) {
    clearInterval(timer.value)
  }
  isTimerRunning.value = true
  timer.value = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--
    } else {
      if (timer.value) {
        clearInterval(timer.value)
      }
      timer.value = null
      isTimerRunning.value = false
      nextExercise()
    }
  }, 1000)
}

function pauseTimer() {
  if (currentExercise.value.type === ExerciseType.Reps) {
    return
  }
  if (timer.value) {
    clearInterval(timer.value)
  }
  timer.value = null
  isTimerRunning.value = false
}

function nextExercise() {
  if (currentExerciseIndex.value < exercises.length - 1) {
    currentExerciseIndex.value++
    const nextExercise = exercises[currentExerciseIndex.value]
    if (nextExercise.type === ExerciseType.Interval || nextExercise.type === ExerciseType.Rest) {
      setTimer(nextExercise.duration)
      playTimer()
    } else {
      clearTimer()
    }
  }
}
function previousExercise() {
  if (currentExerciseIndex.value > 0) {
    currentExerciseIndex.value--
    const previousExercise = exercises[currentExerciseIndex.value]
    if (
      previousExercise.type === ExerciseType.Interval ||
      previousExercise.type === ExerciseType.Rest
    ) {
      setTimer(previousExercise.duration)
      playTimer()
    } else {
      clearTimer()
    }
  }
}

function fullReset() {
  currentExerciseIndex.value = 0
  clearTimer()
}
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center exercise-display">
      <!-- Current Exercise Display -->
      <div class="col-12 text-center mb-3">
        <!--Progress bar-->
        <div class="progress">
          <div
            v-if="currentExercise.type === ExerciseType.Interval"
            class="progress-bar"
            role="progressbar"
            :style="{ width: `${(totalSeconds / currentExercise.duration) * 100}%` }"
          ></div>
          <div
            v-else-if="currentExercise.type === ExerciseType.Rest"
            class="rest-bar"
            role="progressbar"
            :style="{ width: `${(totalSeconds / currentExercise.duration) * 100}%` }"
          ></div>
        </div>
        <h1>{{ currentExercise.name }}</h1>
        <h2 v-if="currentExercise.type === ExerciseType.Reps">Reps: {{ currentExercise.reps }}</h2>
        <h2 v-else-if="currentExercise.type === ExerciseType.Interval">
          Duration: {{ currentExercise.duration }} seconds
        </h2>
        <h2 v-else-if="currentExercise.type === ExerciseType.Rest">
          Rest for {{ currentExercise.duration }} seconds
        </h2>
      </div>
      <div
        v-if="currentExercise.type !== ExerciseType.Reps"
        class="row justify-content-center mb-3"
      >
        <div class="col-12 text-center">
          <h2>{{ totalSeconds }} seconds left</h2>
        </div>
      </div>
      <!-- Next Exercise Preview -->
      <div class="col-12 text-center mb-3">
        <h2 v-if="currentExercise.type === ExerciseType.Rest && nextExercisePreview">
          Next: {{ nextExercisePreview }}
        </h2>
        <h2 v-else-if="nextExercisePreview === null">No more exercises</h2>
      </div>
    </div>
    <div class="controls">
      <div class="row justify-content-center mb-3">
        <div class="col-12 text-center">
          <button class="btn btn-info material-icons-outlined" @click="previousExercise">
            skip_previous
          </button>
          <button v-if="!isTimerRunning" class="btn material-icons-outlined" @click="playTimer">
            play_arrow
          </button>
          <button v-else class="btn material-icons-outlined" @click="pauseTimer">pause</button>
          <button class="btn btn-info material-icons-outlined" @click="nextExercise">
            skip_next
          </button>
        </div>
      </div>
      <button @click="fullReset" class="btn btn-primary">Full reset</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
}

button {
  min-width: 60px;
  min-height: 40px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.material-icons-outlined {
  font-size: 2rem;
}

.exercise-display {
  height: 60vh;
}

.progress-bar {
  background-color: #66ccff;
  transition: width 1s linear;
}

.rest-bar {
  background-color: #f0ad4e;
  transition: width 1s linear;
}
</style>
