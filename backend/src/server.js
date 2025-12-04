import express from "express"
import { ENV } from "./config/env.js"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello Wor2ld")
})

console.log("mongo uri:", ENV.MONGO_URI)

app.listen(ENV.PORT, () => {
  console.log("SEVER started at port:", ENV.PORT)
})
