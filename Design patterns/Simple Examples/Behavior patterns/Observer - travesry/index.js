function EventObserver() {
  this.observer = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observer.push(fn)
    console.log(`You are now subscribed ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.observer = this.observer.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed`);
  },
  fire: function () {
    this.observer.forEach(function (item) {
      item.call();
    })
  }
}

const click = new EventObserver();

//Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

//Click Handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurSeconds = function () {
  console.log(`Current Milliseconds: ${new Date().getSeconds()}`)
}