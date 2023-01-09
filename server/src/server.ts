import express from 'express';
import morgan from 'morgan';
import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res)=> res.send("runnig"));

let port = 4000;
app.listen(port, async () => {
    AppDataSource.initialize().then(async () => {
        console.log("Inserting a new user into the database...")
    }).catch(error => console.log(error))
})