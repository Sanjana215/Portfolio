import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import Router from './Routes/portfolioroutes.js'
import path from "path"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

//app.use(express.static(path.join(__dirname,'../Frontend/dist','')))

app.use("/",Router)

//app.get('*',(req,res)=>{
 // res.sendFile(path.join(__dirname,"../Frontend/dist/assets/index-CF06BNEb.js"))
//})

const PORT= process.env.PORT || 8000


app.listen(PORT,()=>{
    console.log("The port is connected successfully")
})

