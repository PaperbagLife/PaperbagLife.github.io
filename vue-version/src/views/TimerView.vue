<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
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
  weight?: string
}
type Rest = {
  name: string
  type: ExerciseType.Rest
  duration: number
}

const totalBodyA: Workout = {
  name: 'Total Body A',
  exercises: [
    { name: 'Elliptical', type: ExerciseType.Interval, duration: 300 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Arm Circle', type: ExerciseType.Interval, duration: 20 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Kneeling Fire Hydrant left (dog pee)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Kneeling Fire Hydrant right (dog pee)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Arm Circle', type: ExerciseType.Interval, duration: 20 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Kneeling Fire Hydrant left (dog pee)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Kneeling Fire Hydrant right (dog pee)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Lat pulldown', type: ExerciseType.Reps, reps: 10, weight: '55lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Seated machine overhead press', type: ExerciseType.Reps, reps: 10, weight: '40lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Lat pulldown', type: ExerciseType.Reps, reps: 10, weight: '55lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Seated machine overhead press', type: ExerciseType.Reps, reps: 10, weight: '40lbs' },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Box squat', type: ExerciseType.Reps, reps: 8 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Box squat', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Slow bicycle', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'plank', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Slow bicycle', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'plank', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Hip flexor stretch (left)', type: ExerciseType.Interval, duration: 45 },
    { name: 'Hip flexor stretch (right)', type: ExerciseType.Interval, duration: 45 },
  ],
}

const conditioning: Workout = {
  name: 'Conditioning',
  exercises: [
    { name: 'Stair climb', type: ExerciseType.Interval, duration: 600 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Rowing', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    {
      name: 'Dumbell curl to press',
      type: ExerciseType.Interval,
      duration: 30,
      weight: '15lbs each hand',
    },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Mountain climber', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Seal crunch', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Rowing', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    {
      name: 'Dumbell curl to press',
      type: ExerciseType.Interval,
      duration: 30,
      weight: '15lbs each hand',
    },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Mountain climber', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Seal crunch', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Standing Quad Stretch (left)', type: ExerciseType.Interval, duration: 45 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Standing Quad Stretch (right)', type: ExerciseType.Interval, duration: 45 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Standing Calf Stretch (left)', type: ExerciseType.Interval, duration: 45 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Standing Calf Stretch (right)', type: ExerciseType.Interval, duration: 45 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    { name: 'Childs pose', type: ExerciseType.Interval, duration: 45 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    {
      name: 'Lat Stretch left (hand on top of each other)',
      type: ExerciseType.Interval,
      duration: 45,
    },
    { name: 'Rest', type: ExerciseType.Rest, duration: 10 },
    {
      name: 'Lat Stretch right (hand on top of each other)',
      type: ExerciseType.Interval,
      duration: 45,
    },
  ],
}

const totalBodyB: Workout = {
  name: 'Total Body B',
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
  name: 'Total Body C',
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

const Kat1: Workout = {
  name: 'Kat 1',
  exercises: [
    { name: 'Push Up', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Push Up', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Push Up', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Push Up', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Bicycle', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Plank', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Bicycle', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
    { name: 'Plank', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Cat Cow', type: ExerciseType.Interval, duration: 45 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Chest Stretch in a Doorway', type: ExerciseType.Interval, duration: 45 },
  ],
}

const Kat2: Workout = {
  name: 'Kat 2',
  exercises: [
    { name: 'Hanging from bar', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Hanging from bar', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Forward body weight lunge hold, left', type: ExerciseType.Interval, duration: 40 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Forward body weight lunge hold, right', type: ExerciseType.Interval, duration: 40 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Forward body weight lunge hold, left', type: ExerciseType.Interval, duration: 40 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Forward body weight lunge hold, right', type: ExerciseType.Interval, duration: 40 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Seal Crunch', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Seal Crunch', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Inch Worm', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Inch Worm', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: "Child's Pose", type: ExerciseType.Interval, duration: 60 },
  ],
}

const Kat3: Workout = {
  name: 'Kat 3',
  exercises: [
    { name: 'Chair pushup (tricep)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Chair pushup (tricep)', type: ExerciseType.Reps, reps: 10 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'flutter kick', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'flutter kick', type: ExerciseType.Interval, duration: 30 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Squats', type: ExerciseType.Reps, reps: 12 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Squats', type: ExerciseType.Reps, reps: 12 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Alternate Leg arm reach', type: ExerciseType.Reps, reps: 20 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Alternate Leg arm reach', type: ExerciseType.Reps, reps: 20 },
    { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
    { name: 'Standing quad stretch left', type: ExerciseType.Interval, duration: 45 },
    { name: 'Standing quad stretch right', type: ExerciseType.Interval, duration: 45 },
    { name: 'Hamstring Stretch', type: ExerciseType.Interval, duration: 45 },
  ],
}

// const Kat4: Workout = {
//   name: 'Kat 4',
//   exercises: [
//     { name: 'Arm Circles', type: ExerciseType.Interval, duration: 30 },
//     { name: 'Torso Twists', type: ExerciseType.Interval, duration: 30 },
//     { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
//     { name: 'Mountain Climbers', type: ExerciseType.Interval, duration: 45 },
//     { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
//     { name: 'Mountain Climbers', type: ExerciseType.Interval, duration: 45 },
//     { name: 'Rest', type: ExerciseType.Rest, duration: 60 },
//     { name: 'Lying Spinal Twist', type: ExerciseType.Interval, duration: 60 },
//     { name: 'Hamstring Stretch left', type: ExerciseType.Interval, duration: 30 },
//     { name: 'Hamstring Stretch right', type: ExerciseType.Interval, duration: 30 },
//     { name: 'Rest', type: ExerciseType.Rest, duration: 30 },
//     { name: 'Deep Squat Hold', type: ExerciseType.Interval, duration: 60 },
//   ],
// }

const editing = ref(false)

const baseList = [Kat1, Kat2, Kat3, totalBodyA, conditioning, totalBodyB, totalBodyC]

const workoutList = ref<Workout[]>(baseList)

const workout = ref<Workout>(Kat1)

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

function clearLocalStorageAndReset() {
  localStorage.removeItem('workoutList')
  workoutList.value = [...baseList]
  workout.value = workoutList.value[0]
  fullReset()
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

function saveWorkoutsToLocalStorage() {
  localStorage.setItem('workoutList', JSON.stringify(workoutList.value))
}

function loadWorkoutsFromLocalStorage() {
  const data = localStorage.getItem('workoutList')
  if (data) {
    try {
      const parsed = JSON.parse(data)
      // Optionally validate structure here
      workoutList.value = parsed
      baseList.forEach((workout) => {
        if (!workoutList.value.some((w) => w.name === workout.name)) {
          workoutList.value.push(workout)
        }
      })

      // Set current workout to first in list if not present
      if (!workoutList.value.includes(workout.value)) {
        workout.value = workoutList.value[0]
      }
    } catch (e) {
      // fallback if corrupted
      localStorage.removeItem('workoutList')
    }
  }
}

const seePreview = ref(false)

onMounted(() => {
  loadWorkoutsFromLocalStorage()
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
                  <span v-if="ex.weight" class="text-muted ms-2">({{ ex.weight }})</span>
                </span>
                <span v-else-if="ex.type === ExerciseType.Rest">
                  <span class="text-secondary">{{ ex.name }}</span> :
                  <span class="badge bg-warning text-dark">{{ ex.duration }} sec </span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 text-center mb-3">
        <select @change="fullReset" v-model="workout" class="form-select mb-3">
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
          {{ currentExercise.weight != null ? `with ${currentExercise.weight}` : '' }}
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
            v-if="currentExercise.type !== ExerciseType.Rest && currentExercise.weight != null"
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
      <button v-if="!editing" @click="editing = true" class="btn btn-primary">Edit</button>
      <button v-if="editing" @click="applyEdit" class="btn btn-primary">Finish</button>
      <!-- <button class="btn btn-primary" @click="deleteCurrentWorkout">Delete</button> -->
      <button @click="seePreview = !seePreview" class="btn btn-primary">
        {{ seePreview ? 'Hide Preview' : 'See Preview' }}
      </button>
      <button class="btn btn-success" @click="saveWorkoutsToLocalStorage">Save</button>
      <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#clearStorage">
        Clear Storage
      </button>
    </div>
    <div id="clearStorage" class="modal">
      <div class="modal-dialog">
        <div class="modal-content p-4 text-center">
          <h4>Are you sure you want to clear all workouts and reset to default?</h4>
          <div class="mt-3">
            <button
              class="btn btn-danger me-2"
              @click="clearLocalStorageAndReset"
              data-bs-dismiss="modal"
            >
              Yes, clear all
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
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
