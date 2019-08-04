const Singletone = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Denny' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance;
    }
  }
})();

const instanceA = Singletone.getInstance();
const instanceB = Singletone.getInstance();
console.log(instanceA === instanceB);