import express from "express"
import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello Wor2ld")
})

app.listen(ENV.PORT, () => {
  console.log("SEVER started at port:", ENV.PORT)
  connectDB()
})
//
