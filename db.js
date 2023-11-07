import { MongoClient } from "mongodb";
import Obj from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()


const MONGO_URL = process.env.MONGO_URL

const createConnection = async () => {
    const client =new MongoClient(MONGO_URL)
    await client.connect();
    console.log("Mongodb is succesfuly connected")
    return client

}

export const client = await createConnection();
export var ObjectId = Obj.ObjectId;