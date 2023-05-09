import { computed, onMounted, onUnmounted, ref } from 'vue'

export const useBreakpoints = () => {
  const windowWidth = ref(window.innerWidth)
  const windowHeight = ref(window.innerHeight)

  const onWidthChange = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  }
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  const type = computed(() => {
    if (windowWidth.value > windowHeight.value) return 'xs'
    return 'md'
  })

  const width = computed(() => windowWidth.value)

  return { width, type }
}
