const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5001;
const api = require("./server/routes");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", api);

// mongoose.connect(process.env.MONGODB_CRED, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connect(`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPWD}@rmmdevmongo.ragyuuv.mongodb.net/?retryWrites=true&w=majority`);
mongoose.connect(`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPWD}@rmmdevliveserver.zjnswc0.mongodb.net/?retryWrites=true&w=majority`);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection successful");
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
