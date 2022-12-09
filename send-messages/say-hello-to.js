module.exports.sayHelloTo = sayHelloTo;

const sayMessageModule = require('../messages/say-message');
const sayMessage = sayMessageModule.sayMessage;

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");
