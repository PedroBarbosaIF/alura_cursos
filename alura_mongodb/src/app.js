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


app.get("/", (req,res) =>{
    res.status(200).send("alura nodeaa course")
});

app.get("/books", (req,res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req,res) =>{
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

app.put("/books/:id", (req,res) =>{
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books[index]);
});


app.post("/books", (req,res) => {
    books.push(req.body);
    res.status(201).send("book was registered!")
});

export default app;