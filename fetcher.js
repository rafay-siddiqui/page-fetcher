const args = process.argv.splice(2);
const fs = require('fs');
const request = require('request');

let URL = args[0];
let filePath = args[1];

request(URL, (error, response, body) => {
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});

request(URL);

