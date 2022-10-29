const express = require("express")
const path = require("path")
const proxy = require("express-http-proxy")

const app = express()

const api_server = process.env.API_SERVER || "http://localhost:8082"

app.set("port", process.env.PORT || 8080)
app.set("host", process.env.HOST || "0.0.0.0")


app.use(express.static("build"))




app.get("/api/*", proxy(api_server,{
    proxyErrorHandler: function(err, res, next) {
      switch (err && err.code) {
        case 'ECONNREFUSED':  { return res.status(500).send('CONNECTION RESFUSED... Check the API_SERVER endpoint'); }
        default:              { next(err); }
      }
    }}))

app.listen(app.get("port"), () => {
    console.log(`[+] Server started on ${app.get("host")}:${app.get("port")}`)
})