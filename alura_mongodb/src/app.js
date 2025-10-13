import express from 'express';
const app = express();


app.use(express.json());


const books = [
    {
        id: 1,
        title: 'the lord of the rings'
    },
    {
        id: 2,
        title: 'the hobbit'
    }
];

function searchBook(id){
    return books.findIndex(book => {
        return book.id === Number(id);
    });
};

//início
app.get("/", (req,res) =>{
    res.status(200).send("alura nodeaa course")
});


//rota GET com todos os livros
app.get("/books", (req,res) => {
    res.status(200).json(books);
});

//rota GET com livro específico usando parâmetro id
app.get("/books/:id", (req,res) =>{
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});


//rota PUT atualizando um livro específico usando parâmetro id
app.put("/books/:id", (req,res) =>{
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});


/*rota POST adicinando um livro ao array de objetos, 
 sendo mostrado num formato json */
app.post("/books", (req,res) => {
    books.push(req.body);
    res.status(201).send("book was registered!")
});

/*rota DELETE deletando um livro espefíco pelo id*/
app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("book deleted!");
});


export default app;