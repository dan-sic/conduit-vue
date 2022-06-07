import { ref } from "vue";

export const useResetRouterView = () => {
  const key = ref(0);

  const updateRouterViewKey = () => {
    key.value++;
  };

  return { key, updateRouterViewKey };
};
