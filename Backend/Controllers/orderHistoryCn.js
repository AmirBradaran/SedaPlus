import OrderHistory from "../Models/orderHistory.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";

export const getAllOrders = catchAsync(async (req,res,next)=>{
    const features = new ApiFeatures(OrderHistory,req.query).filters().limitFields().paginate().sort();
    const orders = await features.query;
    res.status(200).json({
        status:true,
        data:orders,
    });
});