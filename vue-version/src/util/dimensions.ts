import { computed, onMounted, onUnmounted, ref } from "vue"

export const useBreakpoints = () => {
  const windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const type = computed(() => {
    if (windowWidth.value < 550) return 'xs'
    return 'md'
  })

  const width = computed(() => windowWidth.value)

  return { width, type }
}