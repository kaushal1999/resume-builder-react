const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
const createAndSendPdf=require("./controllers/createPdf")
const port = process.env.PORT || 5000 


app.post("/create-pdf",createAndSendPdf)




function start() {
    try {
        app.listen(port,console.log("listening..."))
    } catch (error) {
        console.log(error);
    }
}


start()