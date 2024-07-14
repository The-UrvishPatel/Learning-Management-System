const express = require("express");
const router = express.Router();

const controllers = require("../controllers/index");
const middlewares = require("../middlewares/index");

router.route("/booklist").get(controllers.book.bookList);
router.route("/addbook").post(controllers.book.addBook);
// router.route("/cancel").post(controllers.appointment.cancel);
// router.route("/update").post(controllers.appointment.update);
// router.route("/list").post(controllers.appointment.list);
// router.route('/:userID').get(controllers.userInfoFromID)

module.exports = router;
