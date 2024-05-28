import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.group(`server running on port ${port}.`);
});

app.get("/", (req, res) => {
res.send("hello world")
})