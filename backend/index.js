const express = require("express");
const cors = require ("cors");
const app = express();

var corsOptions= {
  origin: "http://localhost:8100"
};

var path = require('path');

// public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la aplicación de Antonio González"});
});
app.get("/motogp", (req, res) => {
    res.json({ message: "Esto es una prueba para la parte MotoGP"});
  });

  require("./routes/motogp.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});