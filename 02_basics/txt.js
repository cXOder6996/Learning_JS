const express=require("express");
const fs=require("fs");
const mongoose=require("mongoose");
const users=require("./users.json");
const app=express();
app.use(express.json());
mongoose.
connect("mongodb://127.0.0.1:27071/MyMangoApp")
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error("Could not connect to MongoDB",err));

//Schema
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },