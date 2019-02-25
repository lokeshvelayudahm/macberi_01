var mysql = require("mysql");

var con = mysql.createConnection({
  port: "8889",
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected!");
});
