import  {ObjectId} from "mongodb"

export class RecordModel{
  public _id: ObjectId;
  public Name: string;  
  public Dept: string;  
  public Course: string;  
  public Score: string; 
  
  constructor(Name: string, Dept: string, Course: string, Score: string){
    this._id = new ObjectId();
    this.Name = Name;
    this.Dept = Dept;
    this.Course = Course;
    this.Score = Score

  }
}