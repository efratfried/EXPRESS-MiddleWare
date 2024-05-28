import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>hello </h1>");
})

app.listen(port, () => {
    console.group(`server running on port ${port}.`);
})