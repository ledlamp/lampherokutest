var Client = require("mpp-client");
var client = new Client("ws://www.multiplayerpiano.com");
client.setChannel("lobby");
client.start();
client.on("hi", ()=>{client.sendArray([
	{m:'userset',set:{name:'𝒟𝑒𝓇𝓅'}},
	{m:'a', message:'𝒟𝑒𝓇𝓅'}
]))