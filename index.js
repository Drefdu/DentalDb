const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const app = express();

connectDb();

app.use(
  cors({
    origin: "http://localhost:8100",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//Esta linea es importa la rutas que estan el la carpeta rutas en el archivo usuario.
app.use("/users", require("./routes/user"));
app.use("/fichas", require("./routes/ficha"));
app.use("/citas", require("./routes/citas"));
app.use("/fotos", require("./routes/fotos"));
app.use("/eventos", require("./routes/eventos"));
app.use("/pulso", require('./routes/pulso'));
/* app.use("/chat", require("./routes/chat")) */

const server = app.listen(4000, () => {
  console.log("servidor corriendo en el puerto 4000");
});

 
