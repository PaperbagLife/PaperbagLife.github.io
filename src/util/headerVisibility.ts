import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export const useHeaderVisibility = () => {
  const headerVisible = ref(true)
  const route = useRoute()

  watch(
    () => route.meta.hideHeader,
    (hideHeader) => {
      headerVisible.value = !hideHeader
    },
    { immediate: true } // This ensures it runs immediately on setup
  )

  return {
    headerVisible,
  }
}
