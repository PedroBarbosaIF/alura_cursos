import mongoose from "mongoose";

async function conectToDB() {
    mongoose.connect("mongodb+srv://admin:@cluster0.qtjvi0c.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default conectToDB;


