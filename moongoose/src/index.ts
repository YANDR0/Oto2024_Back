import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";

config();
const app = express();
const port = process.env.PORT || 3000;

const dbUrl = process.env.DB_URL;
console.log(dbUrl);


connect(dbUrl as string).then(res => {
    console.log("Aaaaaa")
}).catch(err => {
    console.log("dasdasd")
});