const express = require("express");
const cors = require ("cors");
const routes = require("./routes/routes.js");
const history = require("connect-history-api-fallback");
const path = require("path");

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
/*
// ADMIN APP
app.use("/", routes);
app.use(express.static(path.join(__dirname, "static")));
*/

//CLIENT APP
const client = express.static(path.join(__dirname, 'dist'));
app.use(history({ index: '/index.html' }));
app.use(client);

app.listen( process.env.PORT || 4000, () => {
    console.log("Backend server is running on port " + process.env.PORT);
});
