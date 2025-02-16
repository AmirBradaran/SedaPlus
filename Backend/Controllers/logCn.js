import Logs from "../Models/Logs.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";

export const getAllLogs = catchAsync(async(req,res,next)=>{
    const features = new ApiFeatures(Logs,req.query).filters().limitFields().paginate().sort();
    const logs = await features.query;
    res.status(200).json({
        status:true,
        data:logs,
    });
});