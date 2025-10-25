import {autor} from "../models/Autor.js";

class AutorController {
    //list ALL autors
    static async listAutors(req, res) {
        try {
            const autorsList = await autor.find({});
            res.status(200).json(autorsList);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - listing autors failed`,
            });
        }
    }

    //list ONE autor
    static async listAutorById(req, res) {
        try {
            const id = req.params.id;
            const especificAutor = await autor.findById(id);
            res.status(200).json(especificAutor);
        } catch (error) {
            res.status(500).json({
                message: `finding autor failed.`,
                error: `${error.message}`
            });
        }
    }

    //registerAautor
    static async registerAutor(req, res) {
        try {
            const newAutor = await autor.create(req.body);
            res.status(201).json({
                message: "autor was registered!",
                autor: newAutor,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - autor registry failed`,
            });
        }
    }

    //update a autor
    static async updateAutorById(req, res) {
        try {
            const id = req.params.id;
            const oldAutor = await autor.findByIdAndUpdate(id, req.body);
            const newAutor = await autor.findById(id);
            res.status(200).json({
                message: "autor updated",
                olAutor: oldAutor,
                newAutor: newAutor
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - autor update failed`,
            });
        }
    }

    //delete a autor by id
    static async deleteAutorById(req, res) {
        try {
            const id = req.params.id;
            const especificAutor = await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: "autor deleted!",
                autor: especificAutor,
            });
        } catch (e) {
            res.status(500).json({
                message: `${error.message} - autor delete failed`,
            });
        }
    }
}

export default AutorController;
