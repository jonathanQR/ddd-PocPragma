import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

export const dbInit = async () => {
    await connect(DB_URI,{},(err)=>{
        if (!err) {
            console.log("MONGO connected")
        } else {
            console.log("¡ERROR BASE DE DATOS!")
        }
    })
    
}

