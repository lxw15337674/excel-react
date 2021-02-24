//防抖
export default function debounce(func: (...args) => void, wait = 10) {
  let timer = 0;
  return (...args) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
      timer = 0;
    }, wait);
  };
}
