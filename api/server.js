const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");
const ingredients = require("./routes/ingredients");
const PORT = process.env.PORT || 5000;

///////////////////////////////////////// Setup /////////////////////////////////////////

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "client/build")));

///////////////////////////////////////// Routes /////////////////////////////////////////

app.use("/", routes);
app.use("/ingredients", ingredients);

///////////////////////////////////////// Listen /////////////////////////////////////////

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
