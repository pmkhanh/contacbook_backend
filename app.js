const express = require("express");
const cors = require("cors");

const app = express();
const contacsRouter = require("./app/routers/contact.route");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contacsRouter);

app.get("/", (req, res)=> {
    res.json({ message: "Welcome to contact book application."})
});

module.exports = app;