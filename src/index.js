// require ('dotenv').config({path: './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()

.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed ! : ", err)
})











// import express from "express"
// const app = express()

// ( async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERR: ", error);
//             throw err
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()