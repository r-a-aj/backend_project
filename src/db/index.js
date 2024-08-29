import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MONGODB connected ! DB HOST: ${connectionDB.connection.host}`)
        // console.log(connectionDB);
    } catch (error) {
        console.log("MONGODB connection FAILED: ", error)
        process.exit(1)
    }
}

export default connectDB