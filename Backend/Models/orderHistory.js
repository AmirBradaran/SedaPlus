import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "آیدی کاربر الزامی است"],
  },
  cart: {
    type: Object,
    required: [true, "سبد خرید الزامی است"],
  },
  status: {
    type: String,
    enum: ["success", "failed"],
  },
  bankTrackingCode: {
    type: String,
  },
  trackingCode: {
    type: String,
  },
});

const OrderHistory = mongoose.model("OrderHistory", orderShema);
export default OrderHistory;
