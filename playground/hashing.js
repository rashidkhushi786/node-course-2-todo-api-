const{SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

// var message = "I am number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);


var data = {
    id:10
};

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.verify(token, 'abc123');
console.log('decoded', decoded);


// console.log(`Hash: ${hash}`);

// var data = {
//     id:4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


// token.data.id =5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed . Do not trust');
// }