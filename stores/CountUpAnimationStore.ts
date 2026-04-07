import { gsap } from "gsap";

export const useCountUpAnimationStore = defineStore("countUpAnimation", () => {
  const number = ref(0);
  const counter = reactive({
    number: 0,
  });

  watch(number, (n: number): void => {
    gsap.to(counter, { duration: 4, number: n || 0 });
  });

  function setNumber(n: number) {
    number.value = n;
  }

  return {
    counter,
    setNumber,
  };
});
