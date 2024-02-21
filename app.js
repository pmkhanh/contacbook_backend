const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");

const app = express();
const contacsRouter = require("./app/routers/contact.route");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contacsRouter);

app.get("/", (req, res)=> {
    res.json({ message: "Welcome to contact book application."})
});

app.use("/api/contacts", contacsRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;