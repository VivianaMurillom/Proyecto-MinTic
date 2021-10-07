var express = require("express");
var mongoose = require("mongoose");
var app = express();

const productsRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//coneccion a la db mongo
mongoose.connect("mongodb+srv://alejo:IIrpVJdHq1P7H9KE@cluster0.702jh.mongodb.net/improTicDB?retryWrites=true&w=majority").then(() => {
    console.log("Estamos conectados")
});

app.use("/api/products", productsRoutes);

module.exports = app;