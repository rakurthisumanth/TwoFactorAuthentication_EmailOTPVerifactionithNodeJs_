const express=require('express')
const { collections } = require('../db/db')

const ChatUser=express.Router()


ChatUser.post("/registration",async(req,res)=>{
    try{    
        console.log(req.body.email,"req.body.email")
        const result=await collections.registerationsChats.find({email:req.body.email}).toArray()
        console.log(result,"resulttttt")
                if(result && result.length>0){
           return res.status(200).send({message:"Emain Already Exist"})
        }else{
            const data=await collections.registerationsChats.insertOne(req.body)
           if(data)
           {return res.status(200).send({message:"sucessfully Register"})}
           else
           {return res.status(400).send({message:"Register Failure"})}
        }
    }
    catch(err){
        console.log(err,"error")
        return res.status(400).send({message:"Failed To Register"})
    }
})


ChatUser.post("/Login",async(req,res)=>{
    try{
        const data=await collections.registerationsChats.find({email:req.body.email,password:req.body.password}).toArray()
        if(data && data.length>0){
            return res.status(400).send({message:"Login Sucessfully"})

        }
        else{
            return res.status(400).send({message:"Login Failure"})
        }
    }
    catch(err){
        return res.status(404).send({message:"Something went Wrong"})
    }
})

module.exports={ChatUser}