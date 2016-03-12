var moment = require('moment');
var now = moment();

// console.log(now.format());
//
// console.log(now.format('MMM Do YYYY, h:ma'));
//
// console.log(now.format('X'));

console.log(now.valueOf());

var timestamp = 1457787632758;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));
