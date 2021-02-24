//节流
export default function throttle(func: Function, wait = 10): Function {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, wait);
  };
}
