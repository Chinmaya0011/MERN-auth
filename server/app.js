const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const authRoutes = require('./routes/auth');


const app=express();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://imchinu17:chinmaya17@mernauth.ieuhc.mongodb.net/?retryWrites=true&w=majority&appName=mernauth",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("MongoDB Connected")})
.catch((err)=>{console.log(err)});

app.use("/auth",authRoutes);
app.listen(3000,()=>{console.log("App Started")})