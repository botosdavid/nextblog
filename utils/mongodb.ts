import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

export const connectMongoose = async () => mongoose.connect(process.env.MONGO_DB!);

const client = new MongoClient(process.env.MONGO_DB!);
export const clientPromise = client.connect();

