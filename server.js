const express = require("express")
const path = require("path")

const app = express()

app.set("port", process.env.PORT || 8080)
app.set("host", process.env.HOST || "0.0.0.0")

if (process.env.NODE_ENV === "production"){
    app.use(express.static("build"))
}


app.listen(app.get("port"), () => {
    console.log(`[+] Server started on ${app.get("host")}:${app.get("port")}`)
})