const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 1500;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hi I am live")
})
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/brand",require("./routes/brandRoutes"));
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`Server ruuning at Port ${PORT}`)
})

// "dev": "nodemon server.js" in package.json
