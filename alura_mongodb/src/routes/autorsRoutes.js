import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

//listar TODOS os livros
routes.get("/autors", AutorController.listAutors);

//REGISTRAR um livro
routes.post("/autors", AutorController.registerAutor);

//listar UM livro pelo ID
routes.get("/autors/:id", AutorController.listAutorById);

//ATUALIZAR um livro pelo ID
routes.put("/autors/:id", AutorController.updateAutorById);

//DELETE a book by ID
routes.delete("/autors/:id", AutorController.deleteAutorById);

//routes.post("/books");

export default routes;
