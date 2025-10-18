import express from "express";
import conectToDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
const app = express();
routes(app);

const connection = await conectToDB();

connection.on("error", (error) => {
    console.error("Connection failed, error below: \n" + error);
});

connection.once("open", () => {
    console.log(`conection is on with mongoDB\n`);
});

//app.use(express.json());

//início
/*app.get("/", (req, res) => {
    res.status(200).send("alura nodeaa course");
});*/

//rota GET com todos os livros
/*app.get("/books", async (req,res) => {
    const booksList = await book.find({});
    res.status(200).json(booksList);
});*/

//rota GET com livro específico usando parâmetro id
/*app.get("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});*/

//rota PUT atualizando um livro específico usando parâmetro id
/*app.put("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});*/

/*rota POST adicinando um livro ao array de objetos, 
 sendo mostrado num formato json */
/*app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("book was registered!");
});*/

/*rota DELETE deletando um livro espefíco pelo id*/
/*app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("book deleted!");
});*/

export default app;
/*
mongodb+srv://admina:<password>@cluster0.qtjvi0c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
