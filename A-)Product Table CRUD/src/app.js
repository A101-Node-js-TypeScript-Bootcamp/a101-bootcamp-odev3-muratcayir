const express = require("express")
const config = require("./config")
const loaders=require("./loaders")

config()
loaders();
const {productRoutes} =require("./routes")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(process.env.APP_PORT,()=>{
    console.log(`Sunucu ${process.env.APP_PORT} portunda çalışıyor`)
    app.use("/products",productRoutes)
})