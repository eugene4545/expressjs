console.log("server is live. . . ")
const userRouter = require("./routes/users")
const express = require("express")


const app =  express()
app.use("/users", userRouter)
app.set("view engine", "ejs")

app.get("/",(req, res) =>{
    console.log("Get is working")
    // res.sendStatus(500).send("HELLO WORLD!")
    // res.download("server.js")
    res.render('index', {name1: "elizabeth"})
})



app.listen(3000)