import Comments from "../Models/Comments.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import getToken from "../Utils/getToken.js";
import HandleError from "../Utils/handleError.js";
import jwt from "jsonwebtoken";

export const getAllComments = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Comments, req.query)
    .filters()
    .limitFields()
    .paginate()
    .sort();
  const comments = await features.query;
  return res.status(200).json({
    status: true,
    data: comments,
  });
});

export const getComment = catchAsync(async (req, res, next) => {
  const comment = await Comments.findById(req.params.id);
  if (!comment) {
    return next(new HandleError("کامنت موردنظر پیدا نشد !", 404));
  }
  return res.status(200).json({
    status: true,
    data: comment,
  });
});

export const deleteComment = catchAsync(async (req, res, next) => {
  const token = getToken(req);
  const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
  if (role === "admin" || role === "superAdmin") {
    const comment = await Comments.findByIdAndDelete(req.params.id);
    if (!comment) {
      return next(new HandleError("کامنت موردنظر پیدا نشد !", 404));
    }
    return res.status(200).json({
      status: true,
      message: "کامنت موردنظر حذف شد !",
    });
  } else {
    const comment = await Comments.findById(req.params.id);
    if (comment.authorId === id) {
      const comment = await Comments.findByIdAndDelete(req.params.id);
      if (!comment) {
        return next(new HandleError("کامنت موردنظر پیدا نشد !", 404));
      };
      return res.status(200).json({
        status:true,
        message:"کامنت موردنظر حذف شد !",
      });
    }else{
        return next(new HandleError("شما دسترسی لازم رو برای انجام این کار ندارید !",403));
    };
  }
});

export const updateComment = catchAsync(async (req, res, next) => {
  const comment = await Comments.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!comment) {
    return next(new HandleError("کامنت موردنظر پیدا نشد !", 404));
  }
  return res.status(201).json({
    status: true,
    message: "محصول موردنظر با موفقیت آپدیت شد !",
    data: comment,
  });
});
