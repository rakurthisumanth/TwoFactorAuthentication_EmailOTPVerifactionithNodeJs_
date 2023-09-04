const express=require('express')
const { ChatUser } = require('./routers/routers')
const { dataBaseConnection } = require('./db/db')

const app=express()
 
app.use(express.json())

dataBaseConnection()
.then(()=>{
    app.use('/chatApp',ChatUser)
    app.listen(4000,()=>{
        console.log("running....")
    })
})
.catch(()=>{
    console.log("data base connection failed ")
})



