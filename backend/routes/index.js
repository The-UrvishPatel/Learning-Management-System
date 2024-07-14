// const doctor = require('./doctor')
// const patient = require('./patient')
// const appointment = require('./appointment')

const user = require('./user')
const librarian = require("./librarian");
const admin = require("./admin");
const book = require("./book");
const borrow = require("./borrow");
const library = require("./library");

module.exports = {
  user,
  librarian,
  admin,
  book,
  borrow,
  library
};