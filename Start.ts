import express, { Application } from "express"
import cors from "cors"
import { mainApp } from "./mainApp";

const Port: number = 3399;
const app: Application = express()

app.use(cors());
app.use(express.json());

mainApp(app)

const server = app.listen(Port, ()=>{
    console.log();
    console.log("Connected....🚀🚀 on port", Port)
});

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err)

    process.exit(1);
});

process.on("unhandledRejection", (reason: any) =>{
    server.close(()=>{
        process.exit(1);
    });
})