import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/jackie", {
    useNewUrlParser:true,
    useUnifiedTOpology:true})
    .then(()=>console.log("Connected to database"))
    .catch(err=>console.log("Not connected to database", err))
