export debounce = (...args) => {
  let [fn, delay] = args;
  let cooldown = args.length > 1 && args[1] > 0 ? args[1] : 0;
  return function() {
    let fnArgs = [...arguments];
    if (!fn.cd) {
      fn.cd = true;
      timeout = setTimeout(()=>{
        fn.cd = false;
        clearTimeout(timeout);
      }, cooldown);
      return fn.apply(this, fnArgs);
    }
  }
}
