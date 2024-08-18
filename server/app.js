const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const authRoutes = require('./routes/auth');


const app=express()