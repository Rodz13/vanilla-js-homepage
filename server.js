const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get("/" , (req,res)=> {
    res.sendFile(path.resolve(__dirname,"public/index.html"));
});

app.get("/about" , (req,res)=> {
    res.send('About page would go here!');
});

app.listen(process.env.PORT || port, () => console.log('Server Running....'));
