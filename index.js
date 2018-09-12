const Floret = require('floret');
const floret = new Floret();

floret.configure(floret.createEnvConfig(process.env));

function sendMessage () {
    console.log("sending message")
}

let chatModule = {
    sendMessage
};

floret.attachModule('chat', chatModule);

floret.listen();