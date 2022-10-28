const express = require("express")
const path = require("path")
const mockEvents = require("./mockData")

const app = express()

app.set("port", process.env.PORT || 8080)
app.set("host", process.env.HOST || "0.0.0.0")


app.use(express.static("build"))




app.get("/api/*", (req,res) => {
    console.log(req)
    // TO IMPLEMENT fetch to backend microservice
    const events = mockEvents
    res.json({
        body:events,
        status: 200 
    })
})
app.listen(app.get("port"), () => {
    console.log(`[+] Server started on ${app.get("host")}:${app.get("port")}`)
})