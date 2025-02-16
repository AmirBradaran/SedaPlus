import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    method:{type:String,required:true},
    url:{type:String,required:true},
    body:{type:Object},
    role:{type:String,enum:['admin','superAdmin'],required:true},
});

const Logs = mongoose.model("Logs", logSchema);
export default Logs;