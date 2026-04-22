import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_URL);
const db = client.db("umayer-database");

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true,
        // requireEmailVerification: true, 
    },
    database: mongodbAdapter(db, {
        
        client
    }),
});