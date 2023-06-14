const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

let path = args[1];
let url = args[0];


request(url, (error, response, body) => {
 if (error) {
  console.log('Error', error);
 };

 fs.writeFile(path, body, err => {

  let size = body.length;

  if (err) {
    console.error(err);
  }
  console.log('Downloaded and saved ' + size + ' bytes to ' + path);

  });
});



