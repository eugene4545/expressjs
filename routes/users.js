const express = require("express");

const router = express.Router()

router.get("/", (req, res) => {
    res.send("this is a new route")
})

router.get("/new", (req, res) => {
    res.send("mowjeoe")
})

module.exports = router