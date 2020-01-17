const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");
const ingredients = require("./routes/ingredients");
const PORT = process.env.PORT || 5000;

///////////////////////////////////////// Setup /////////////////////////////////////////

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));

///////////////////////////////////////// Routes /////////////////////////////////////////

app.use("/api/ingredients", ingredients);
app.use("*", routes);

///////////////////////////////////////// Listen /////////////////////////////////////////

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
