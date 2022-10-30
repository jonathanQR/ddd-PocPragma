import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    personDocument:{
        type: String,
        required: true,
        unique:true
    },
    key: {
        type: String
    },
    location: {
        type: String
    }
})

export default mongoose.model('Image',ImageSchema);