
import { client, ObjectId } from '../db.js'


// STUDENT

export const students = (req) => {

    return client
    .db("mongoworkout")
    .collection("students")
    .find(req.query)
    .toArray()
}




export const addStudent = (newData) => {

    return client
    .db("mongoworkout")
    .collection("students")
    .insertOne(newData)
}



export const addmultiplestudent = (manyData) => {

    return client
    .db("mongoworkout")
    .collection("students")
    .insertMany(manyData)
}


export const objidfind = (id) => {

    return client
    .db("mongoworkout")
    .collection("students")
    .findOne({_id:new ObjectId(id)})
}



// export const idfind = (id) => {

//     return client
//     .db("mongoworkout")
//     .collection("students")
//     .findOne({name:id})
// }

export const editstudent = (id,updatedstudent) => {

    return client
    .db("mongoworkout")
    .collection("students")
    .updateOne({_id:new ObjectId(id)},{$set:updatedstudent})
}



export const deletestudent = (id) => {

    return client
    .db("mongoworkout")
    .collection("students")
    .deleteOne({_id:new ObjectId(id)})
}
