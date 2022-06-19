let express = require("express");

let app = express();
let PORT = process.env.PORT || 3000;
let apiRoutes = require("./routes/apiRoutes");
let htmlRoutes = require("./routes/htmlRoutes");

// Prepares the Express app to equip data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});