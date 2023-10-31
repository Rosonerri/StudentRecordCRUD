import { Application, Request, Response } from "express";
import { statusCode } from "./Utils/statusCode";
import Record from "./Router/RecordRouter"

export const mainApp = (app: Application) =>{
    app.use("/api/v1", Record);

    app.get("/", (req:Request, res:Response) =>{
        try {
            return res.status(statusCode.Ok).json({
                message: "Welcome to our Record API"
            })
        } catch (error) {
            return res.status(statusCode.Bad_Request).json({
                message: "Error"
            })
        }
    });
};