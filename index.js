//Import From Packages
const express =  require("express");
const mongoose = require("mongoose");

//Import from other files
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB_URL = "mongodb+srv://berk:berk45@cluster0.wzl7xzw.mongodb.net/?retryWrites=true&w=majority"; 

//middleware => Client -> middleware -> Server -> Client
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// Connection to MongoDB
mongoose.connect(DB_URL)
.then(() => {
    console.log("Connection Successfully")
}).catch(e => {
    console.log(e);
}); 
//Create an API
// GET, PUT, POST, DELETE, UPDATE -> CRUD


app.listen(PORT, "0.0.0.0", () => {
    console.log('connected at port ' + PORT);
});