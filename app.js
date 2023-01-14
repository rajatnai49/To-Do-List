//jshint esversion:6

let express = require("express");
let bodyParser = require("body-parser");

const app  = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let items = ["buy food", "cook food", "eat food"];
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  let today =  new Date();
  let currDay = today.getDay();
  let options = {
    weekday: "long",
    day:"numeric",
    month:"long"
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("lists", {kindOfDay: day, newListItem: items});
});

app.post("/", function(req,res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("port was started at port 3000");
});
