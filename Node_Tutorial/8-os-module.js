const os = require('os')

// console.log(os);

//Info about the user
const user = os.userInfo();
// console.log(user);

//method return systems uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)