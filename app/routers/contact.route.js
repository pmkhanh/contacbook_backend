const express = require("express");
const contacts = require("../controller/contact.controller");

const router = express.Router();

// router.route("/")
//     .post(contacts.create)
//     .delete(contacts.deleteAll);
// router.route("/findAll")
//     .get(contacts.findAll);
// router.route("/favorite")
//     .get(contacts.findAllFavorite);
router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;