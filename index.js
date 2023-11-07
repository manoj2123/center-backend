
// npm init
// package.json la script la start:"node index.js"
// npm i nodemon
// npm i dotenv
// npm install express
// npm install mongodb


import express from "express";
import {studentsRouter} from "./student.js"
import cors from 'cors';
import { teachersRouter } from "./teacher.js";
import { client } from "./db.js";




const app = express()

app.use(express.static("express")); // loading the static file
app.use(express.json()) // middleware tells server to use json
app.use(cors())


app.get("/",async(req,res)=>{
    const studentdata =  await client
    .db("mongoworkout")
    .collection("students")
    .find()
    .toArray()

    const teacherdata = await client
    .db("mongoworkout")
    .collection("teachers")
    .find()
    .toArray()


    res.status(200).json({studentsData:studentdata,teachersData:teacherdata})
})
app.use("/students" , studentsRouter)
app.use("/teachers" , teachersRouter)
app.listen(9000,()=>console.log(`server started localhost:9000`))