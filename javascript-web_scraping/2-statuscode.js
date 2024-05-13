#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (err, response) {
  if (err) {
    // If an error occurred, print the error object
    console.error(err);
  } else {
    console.log('code:', response && response.statusCode);
  }
});
