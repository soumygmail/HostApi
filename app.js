require("dotenv").config();
const express = require('express');
const app = express();


const connectDB  = require("./db/conn");

const PORT = process.env.PORT || 3000

const products_routes = require("./routes/products");


app.get("/", (req,res)=>{
   res.send("Hi i am live");
});



// middleware to set router 

app.use("/api/products", products_routes)

const start = async() => {
try{
await connectDB(process.env.MONGODB_URL);
app.listen( PORT,() =>{
    console.log(`${PORT} Yes I am connected`);
});
}catch (error) {
  console.log(error);
}
}




start();