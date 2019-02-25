const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

app.get("/", (req, res) => res.send("Hello fuck node node "));
//app.get('/lokesh', (req,res) => res.send("hello world")s);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
