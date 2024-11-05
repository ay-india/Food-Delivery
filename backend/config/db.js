import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://emailayadav:emailayadav@cluster0.htcjx.mongodb.net/food_delivery').then(()=>console.log("DataBase Connected"));
}