const express = require("express");
const bodyParser = require("body-parser");
//const path = require("path");
//const spotifyAPI = require("./spotifyAPI");
//const contactApi = require(path.join(__dirname,"contactApi"));
const app = express();//modulo de api externo

app.use(bodyParser.json());

const port = process.env.PORT || 80;

//contactApi(app);
//spotifyAPI(app);

app.use("/",express.static("./public"));

app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");