const express = require("express");
const contacts = require("../controller/contact.controller");

const router = express.Router();

router.route("/")
    .post(contacts.create)
router.route("/findAll")
    .get(contacts.findAll);
router.route("/favorite")
    .get(contacts.findAllFavorite);
router.route("/findOne/:id")
    .get(contacts.findOne);
router.route("/update/:id")
    .put(contacts.update);
router.route("/delete/:id")
    .delete(contacts.delete);
router.route("/deleteAll")
    .delete(contacts.deleteAll);

module.exports = router;