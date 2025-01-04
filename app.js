const express = require("express");
const app = express();
app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);




app.get("/", (req, res) => {
    res.render("index");

})





app.listen(3000, () => {
    console.log("running on port 3000")
})




