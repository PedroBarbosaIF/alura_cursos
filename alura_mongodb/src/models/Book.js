import mongoose from "mongoose";
import { autor } from "./Autor.js";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    
    //ref deve referenciar o model da coleção estrangeira
    autor: {type: mongoose.Schema.Types.ObjectId, ref: autor},
    publisher: {type: String},
    price: {type: Number},
    pages: {type: Number},
}, {versionKey: false});

const book = mongoose.model("books", bookSchema);

export default book;