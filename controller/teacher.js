
import { client, ObjectId } from '../db.js'


// TEACHER

export const teachers = (req) => {

    return client
    .db("mongoworkout")
    .collection("teachers")
    .find(req.query)
    .toArray()
}

export const addTeacher = (newData) => {

    return client
    .db("mongoworkout")
    .collection("teachers")
    .insertOne(newData)
}


export const addmultipleteacher = (manyData) => {

    return client
    .db("mongoworkout")
    .collection("teachers")
    .insertMany(manyData)
}


export const objidfindteacher = (id) => {

    return client
    .db("mongoworkout")
    .collection("teachers")
    .findOne({_id:new ObjectId(id)})
}

export const editteacher = (id,updatedteacher) => {

    return client
    .db("mongoworkout")
    .collection("teachers")
    .updateOne({_id:new ObjectId(id)},{$set:updatedteacher})
}
export const deleteteacher = (id) => {

    return client
    .db("mongoworkout")
    .collection("teachers")
    .deleteOne({_id:new ObjectId(id)})
}