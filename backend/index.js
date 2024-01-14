const express = require("express")
require("dotenv").config()
const app = express()
const Port = process.env.PORT || 8000
const connection = require('./Config/db')
const { userRouter } = require("./Routers/UserRouter")

app.use(express.json())
app.use("/users",userRouter)


app.get("/",(req,res)=>{
    res.status(200).send({message:"Welcome to the backend of Task Management App"})
})


app.listen(Port,async()=>{
    try{
        await connection
        console.log("Server is connected to DB")
        console.log(`App is listening to the port`)
    }catch(error){
        console.log(error)
    } 
})