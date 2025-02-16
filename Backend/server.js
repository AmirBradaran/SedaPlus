import mongoose from "mongoose";
import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server Is Running On Port ${process.env.PORT}`);
});

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Database Is Running');
}).catch((err)=>{
    console.log(err);
});