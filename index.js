const myInfo = require("./information");
const cowSay = require("cowsay");

console.log(
  cowSay.say({
    text: `Hello I'm ${myInfo.name} from ${myInfo.campus}`,
  })
);
