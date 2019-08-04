/**
 * Basic structure syntax
 * (function () {
      * Declare private vars and functions

      return {
      * Declare public var and functions

      }
    })();
*/

//Standart Module Pattern
const UICtrl = (function () {
  let text = 'Hello world';

  const changeText = function () { //private
    const el = document.querySelector('h1');
    el.textContent = text;
  }

  return {
    callChangeText: function () {
      changeText();
      console.log(text)
    }
  }
})();

UICtrl.callChangeText();
//UICtrl.changeText(); not working

// console.log(UICtrl.text); error