import express from "express";
import BookController from "../controllers/livroController.js";

const routes = express.Router();

//listar TODOS os livros
routes.get("/books", BookController.listBooks);

//REGISTRAR um livro
routes.post("/books", BookController.registerBook);

//listar UM livro pelo ID
routes.get("/books/:id", BookController.listBookById);

//ATUALIZAR um livro pelo ID
routes.put("/books/:id", BookController.updateBookById);



//routes.post("/books");

export default routes;
