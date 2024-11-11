import mongoose from "mongoose";

const connectDB = async() => {
    try {
     await mongoose.connect(process.env.MONGO_DB_URI);
     console.log("DataBase Connected");
    } catch (error) {
        console.log("Error in connecting database");
    }
};

export default connectDB;