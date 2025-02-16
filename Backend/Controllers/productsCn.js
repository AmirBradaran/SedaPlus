import Products from "../Models/Products.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";

export const getAllProducts = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Products, req.query)
    .filters()
    .limitFields()
    .paginate()
    .sort();
  const products = await features.query;
  return res.status(200).json({
    status: true,
    data: products,
  });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    return next(new HandleError("محصول موردنظر پیدا نشد !", 404));
  }
  return res.status(200).json({
    status: true,
    data: product,
  });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) {
    return next(new HandleError("محصول موردنظر پیدا نشد !", 404));
  }
  return res.status(201).json({
    status: true,
    message: "محصول موردنظر با موفقیت آپدیت شد !",
    data: product,
  });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Products.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new HandleError("محصول موردنظر پیدا نشد !", 404));
  };
  return res.status(200).json({
    status:true,
    message:"محصول موردنظر با موفقیت حذف شد !",
  });
});

export const createProduct = catchAsync(async (req,res,next)=>{
    const newProduct = await Products.create(req.body);
    return res.status(200).json({
        status:true,
        message:"محصول موردنظر با موفقیت ایجاد شد !",
        data:newProduct,
    });
});