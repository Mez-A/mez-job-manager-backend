import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import { JobSource } from "./models/JobSouce.js";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mez-job-manager'

mongoose.connect(MONGODB_URI, (err) => {
    if (err) console.log(err);
})

const app = express();
const port = process.env.PORT || 9000;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Job Manager API</h1>");
});

app.get("/job-sources", async(req, res) => {
    const jobSources = await JobSource.find()
    res.status(200).json(jobSources);
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
