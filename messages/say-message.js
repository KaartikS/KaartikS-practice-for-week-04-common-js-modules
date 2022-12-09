const helloMessage = require('./hello-message').helloMessage;
module.exports.sayMessage = sayMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);
