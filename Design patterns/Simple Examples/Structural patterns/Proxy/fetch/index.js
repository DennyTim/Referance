class Obj {
  get(route) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${route}`)
      .then(result => result.json())
      .then(res => console.log(res))
  }
}

const test = new Obj();
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = setTimeout(() => inThrottle = false, limit)
    }
  }
}

const proxyApi = new Proxy(test, {
  resultfunc: null,
  get(target, prop) {
    if (prop === 'get') {
      if (!this.resultfunc) {
        this.resultfunc = throttle((route) => target.get(route), 1000)
      }
      return this.resultfunc;
    }
  }
})

document.querySelector('#btn').onclick = () => proxyApi.get('4');