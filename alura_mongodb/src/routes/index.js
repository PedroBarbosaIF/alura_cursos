import express from "express";
import booksRoutes from "./booksRoutes.js";
import autorsRoutes from "./autorsRoutes.js"

const routesArray = [booksRoutes, autorsRoutes];

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("node.js course");
    });

    app.use(express.json(), routesArray);

};

export default routes;
