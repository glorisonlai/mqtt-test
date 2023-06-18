const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  client.subscribe("s");
  console.log(`Client has subscribed!😀`);
});

client.on("message", (topic, message) => {
  console.log(`topic: ${topic},  message: ${message.toString()}`);
});
