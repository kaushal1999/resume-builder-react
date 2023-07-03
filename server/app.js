const expres = require("express")
const app = express()
const createAndSendPdf=require("./controllers/createPdf")
const port= process.env.PORT||5000 
require(expres.json())

app.post("/create-pdf",createAndSendPdf)




function start() {
    try {
        app.listen(port,console.log("listening..."))
    } catch (error) {
        console.log(error);
    }
}


start()