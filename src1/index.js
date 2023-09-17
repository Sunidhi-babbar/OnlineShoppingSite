const path=require('path');
const express=require("express");

const app=express();

//relative absolute
//console.log(__dirname);

//console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public_onlineshop');

//built in middleware
app.use(express.static(staticPath))

//to set view engine
app.set("view engine","hbs");

//template engine route

app.get("/",(req,res)=>{

     res.render("index1",{
          contactUs: "TextUs",
     });
});

app.get("/",(req,res)=>{

res.send("hello from express");
});

app.get('/about', (req,res)=>{
    res.send("hello from the about page");
})

app.listen(8000, ()=>{
    console.log("listening to the port at 8000");
});