import {Request, Response} from "express"
import { statusCode } from "../Utils/statusCode"
import {client, db} from "../Utils/dbConfig"
import {RecordModel} from "../Model/RecordModel"
import { ObjectId } from "mongodb";

export const createRecord = async (req: Request, res: Response)=>{
try {
    await client.connect();
    const { Name, Dept, Course, Score } = req.body

    const Record = new RecordModel(Name, Dept, Course, Score);
    await db.insertOne(Record);
    return res.status(statusCode.Created).json({
        message: "Book Created",
        data: Record
    })
} catch (error) {
    return res.status(statusCode.Bad_Request).json({
        message: "Error"
    });
}
};

export const readRecord = async (req:Request, res:Response) =>{
try {
    await client.connect();

    const Record = await db.find().toArray();

    return res.status(statusCode.Ok).json({
        message: "Record Found",
        data: Record
    })
} catch (error) {
    return res.status(statusCode.Bad_Request).json({
        message: "Error"
    });
}
}
export const readRecordByID = async (req: Request, res: Response) => {
    try {
      await client.connect();
      const { studentID } = req.params;
  
      const book = await db.findOne({ _id: new ObjectId(studentID) });
  
      return res.status(statusCode.Ok).json({
        message: "Student Found by ID",
        data: book,
      });
    } catch (error) {
      return res.status(statusCode.Bad_Request).json({
        message: "Error",
      });
    }
  };

export const readRecordByDept = async (req: Request, res: Response) =>{
    try {
        await client.connect();
        const {Dept} = req.body
        const Record = await db.find({ Dept }).toArray();

        return res.status(statusCode.Ok).json({
            message: "Record Found By Department",
            data: Record
        });
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            meesage: "Error"
        });
    }
};

export const updateRecord = async (req: Request, res:Response)=>{
    try {
        await client.connect();
        const {studentID} = req.params;
        const { Name } = req.body;

        const Record  = await db.updateOne(
          {_id: new ObjectId(studentID)},
          {$set: {Name}}
        );

        return res.status(statusCode.Ok).json({
            message: "Record Updated Succesfully",
            data: Record
        })
    } catch (error) {
        return res.status(statusCode.Bad_Request).json({
            message: "Error"
        });
    }
};

export const deleteRecord = async (req:Request, res: Response)=>{
   try {
    await client. connect();
    const {studentID} = req.params;
    await db.deleteOne({ _id: new ObjectId (studentID)});

    return res.status(statusCode.Created).json({
        message: "Record Deleted"
    });
   } catch (error) {
    return res.status(statusCode.Bad_Request).json({
        message: "Error"
    });
   }
};