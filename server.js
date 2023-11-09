const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./User");
const PORT = 5000;

mongoose.connect('mongodb+srv://zubairahmad:Ulqqt5ky6kOhBJR8@cluster0.hdtsgmg.mongodb.net/').then(()=>{
console.log("Connected to MongoDB ");
}).catch(err=>{
    console.error("error connection to database",err);
});
app.use(express.json());
app.use('/api/users',userRoute);
// app.get("/", (req, res) => {
//     console.log("hello data");
// });
// Routes



app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})