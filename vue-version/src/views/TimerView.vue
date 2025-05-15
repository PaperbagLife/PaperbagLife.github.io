<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
type Workout = {
  name: string
  exercises: ExerciseEntry[]
}
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

const totalBodyB: Workout = {
  name: 'total body b',
  exercises: [
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
    { name: 'Machine Bench Press', type: ExerciseType.Reps, reps: 12, weight: '40lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Machine Bench Press', type: ExerciseType.Reps, reps: 12, weight: '40lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Machine Arm Curl', type: ExerciseType.Reps, reps: 12, weight: '20lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Machine Arm Curl', type: ExerciseType.Reps, reps: 12, weight: '20lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Flutter Kick', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Flutter Kick', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Flutter Kick', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Cat Cow', type: ExerciseType.Interval, duration: 45 },
  ],
}

const totalBodyC: Workout = {
  name: 'total body C',
  exercises: [
    { name: 'Spin bike', type: ExerciseType.Interval, duration: 300 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Dumbbell Halo', type: ExerciseType.Reps, reps: 10, weight: '15lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Glute March (lying down leg raise)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Dumbbell Halo', type: ExerciseType.Reps, reps: 10, weight: '15lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Glute March (lying down leg raise)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Body weight forward lunge hold (left)', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Body weight forward lunge hold (right)', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Dumbbell 1 arm row (left)', type: ExerciseType.Reps, reps: 10, weight: '20lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Dumbbell 1 arm row (right)', type: ExerciseType.Reps, reps: 10, weight: '20lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Dumbbell 1 arm row (left)', type: ExerciseType.Reps, reps: 8, weight: '25lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Dumbbell 1 arm row (right)', type: ExerciseType.Reps, reps: 8, weight: '25lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Cable tricep pushdown', type: ExerciseType.Reps, reps: 12, weight: '15lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Cable tricep pushdown', type: ExerciseType.Reps, reps: 10, weight: '15lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Yoga ball crunch', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 15 },
    { name: 'Spiderman', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Yoga ball crunch', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 15 },
    { name: 'Spiderman', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Yoga ball crunch', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 15 },
    { name: 'Spiderman', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    {
      name: 'Kneeingly overhead oblique stretch (left)',
      type: ExerciseType.Interval,
      duration: 30,
    },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    {
      name: 'Kneeingly overhead oblique stretch (right)',
      type: ExerciseType.Interval,
      duration: 30,
    },
  ],
}
const editing = ref(false)

const workoutList = ref([totalBodyB, totalBodyC])

const workout = ref<Workout>(totalBodyB)

const currentExerciseIndex = ref(0)
const currentExercise = computed(() => workout.value.exercises[currentExerciseIndex.value])

const nextExercisePreview = computed(() => {
  // Find next non-rest exercise
  let nextIndex = currentExerciseIndex.value + 1
  while (
    nextIndex < workout.value.exercises.length &&
    workout.value.exercises[nextIndex].type === ExerciseType.Rest
  ) {
    nextIndex++
  }
  return nextIndex < workout.value.exercises.length ? workout.value.exercises[nextIndex] : null
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
  if (currentExerciseIndex.value < workout.value.exercises.length - 1) {
    currentExerciseIndex.value++
    const nextExercise = workout.value.exercises[currentExerciseIndex.value]
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
    const previousExercise = workout.value.exercises[currentExerciseIndex.value]
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
  if (
    workout.value.exercises[0].type === ExerciseType.Interval ||
    workout.value.exercises[0].type === ExerciseType.Rest
  ) {
    setTimer(workout.value.exercises[0].duration)
  }
}

function applyEdit() {
  if (editing.value) {
    editing.value = false
  }
  if (
    currentExercise.value.type === ExerciseType.Interval ||
    currentExercise.value.type === ExerciseType.Rest
  ) {
    setTimer(currentExercise.value.duration)
  }
}

function deleteCurrentWorkout() {
  const index = workoutList.value.indexOf(workout.value)
  if (index > -1) {
    workoutList.value.splice(index, 1)
    if (workoutList.value.length > 0) {
      workout.value = workoutList.value[0]
    }
  }
}

const seePreview = ref(false)

onMounted(() => {
  fullReset()
})
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center exercise-display overflow-hidden">
      <!-- Current Exercise Display -->
      <div v-if="seePreview" class="workout-preview-container mb-4">
        <div class="workout-preview-list">
          <h3 class="mb-3 list-title">{{ workout.name }}</h3>
          <ul class="list-group">
            <li
              v-for="(ex, exIndex) in workout.exercises"
              :key="exIndex"
              class="list-group-item d-flex align-items-center"
            >
              <span class="fw-bold me-2">{{ exIndex + 1 }}.</span>
              <span class="flex-grow-1">
                <span v-if="ex.type === ExerciseType.Reps">
                  {{ ex.name }}: <span class="badge bg-primary">{{ ex.reps }} reps</span>
                  <span v-if="ex.weight" class="text-muted ms-2">({{ ex.weight }})</span>
                </span>
                <span v-else-if="ex.type === ExerciseType.Interval">
                  {{ ex.name }}: <span class="badge bg-success">{{ ex.duration }} sec</span>
                </span>
                <span v-else-if="ex.type === ExerciseType.Rest">
                  <span class="text-secondary">{{ ex.name }}</span
                  >:
                  <span class="badge bg-warning text-dark">{{ ex.duration }} sec</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 text-center mb-3">
        <select v-model="workout" class="form-select mb-3">
          <option v-for="(workout, index) in workoutList" :key="index" :value="workout">
            {{ workout.name }}
          </option>
        </select>
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
        <h2 v-if="currentExercise.type === ExerciseType.Reps">
          {{
            `${currentExercise.reps} reps` +
            (currentExercise.weight != null ? ` with ${currentExercise.weight}` : '')
          }}
        </h2>
        <h2 v-else-if="currentExercise.type === ExerciseType.Interval">
          Duration: {{ currentExercise.duration }} seconds
        </h2>
        <h2 v-else-if="currentExercise.type === ExerciseType.Rest">
          Rest for {{ currentExercise.duration }} seconds
        </h2>
      </div>

      <!-- Edit panel -->
      <div v-if="editing">
        <div class="col-12 text-center mb-3">
          <h2>Edit Exercise</h2>

          <input
            v-if="currentExercise.type === ExerciseType.Reps"
            v-model.number="currentExercise.reps"
            type="number"
            placeholder="Reps"
            class="form-control mb-2"
          />
          <input
            v-if="currentExercise.type === ExerciseType.Reps"
            v-model="currentExercise.weight"
            type="text"
            placeholder="Weight (optional)"
            class="form-control mb-2"
          />
          <input
            v-if="
              currentExercise.type === ExerciseType.Interval ||
              currentExercise.type === ExerciseType.Rest
            "
            v-model.number="currentExercise.duration"
            type="number"
            placeholder="Duration (seconds)"
            class="form-control mb-2"
          />
        </div>
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
          <button
            v-if="!isTimerRunning"
            class="btn btn-secondary material-icons-outlined"
            @click="playTimer"
          >
            play_arrow
          </button>
          <button v-else class="btn btn-secondary material-icons-outlined" @click="pauseTimer">
            pause
          </button>
          <button class="btn btn-info material-icons-outlined" @click="nextExercise">
            skip_next
          </button>
        </div>
      </div>
      <button @click="fullReset" class="btn btn-primary">Full reset</button>
      <button v-if="!editing" @click="editing = true" class="btn btn-primary">Edit</button>
      <button v-if="editing" @click="applyEdit" class="btn btn-primary">Finish</button>
      <button class="btn btn-primary" @click="deleteCurrentWorkout">Delete</button>
      <button @click="seePreview = !seePreview" class="btn btn-primary">
        {{ seePreview ? 'Hide Preview' : 'See Preview' }}
      </button>
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

.workout-preview-container {
  max-width: 500px;
  margin: 0 auto;
}

.list-title {
  color: #66ccff;
}

.workout-preview-list {
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafbfc;
  padding: 1rem;
}
</style>
