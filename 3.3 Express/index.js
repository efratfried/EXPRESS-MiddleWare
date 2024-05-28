import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>efrat</h1>");
});

app.post('/register',(req,res)=>{
    res.sendStatus(201)
});

app.put('/user/efrat',(req,res)=>{
    res.sendStatus(200);
});

app.patch('/user/efrat',(req,res)=>{
    res.sendStatus(200);
});

app.delete('/user/efrat',(req,res)=>{
    res.sendStatus(200);
});
app.listen(port,()=>{
    console.log('hi its me' );
})