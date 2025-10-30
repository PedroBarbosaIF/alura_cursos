import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    
    //ref deve referenciar o model da coleção estrangeira
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores'},
    autors: [{type: mongoose.Schema.Types.ObjectId, ref: 'autores'}],
    publisher: {type: String},
    price: {type: Number},
    pages: {type: Number},
}, {versionKey: false});

const book = mongoose.model("books", bookSchema);

export default book;