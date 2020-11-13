const express=require('express')
const app=express();
const mongoose=require('mongoose');
//DB connection
const dbstring='mongodb://localhost:27017/userApi';
mongoose.connect(dbstring,{useNewUrlParser:true, useUnifiedTopology:true},()=>console.log("connected to DB"),(e)=>console.log(e));

//middleware
app.use(express.json());
const userRoutes=require('./Routes/routes');
app.use('/user',userRoutes);


app.listen(8080,()=>console.log("Server started at port 8080"));

