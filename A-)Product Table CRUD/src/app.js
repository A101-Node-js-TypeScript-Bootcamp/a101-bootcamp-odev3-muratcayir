const express = require("express")
const config = require("./config")


config()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(process.env.APP_PORT,()=>{
    console.log(`Sunucu ${process.env.APP_PORT} portunda çalışıyor`)
   
})