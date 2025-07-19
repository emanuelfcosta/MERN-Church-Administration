const express = require("express");
const app = express();
const conn = require("./db/conn");

// para tornar o servidor acessivel em qualquer lugar
const cors = require("cors");
//app.options('*', cors())
app.use(cors());

// to use .env
require("dotenv/config");

const api = process.env.API_URL;

const bodyParser = require("body-parser");

const morgan = require("morgan");

// app.get("/", (req, res) => {
//   res.send("test");
// });

//middleware to receive and send as json
app.use(bodyParser.json());
app.use(morgan("tiny"));

const membersRoutes = require("./routes/membersRoutes");
const churchesRoutes = require("./routes/churchesRoutes");
const studiesRoutes = require("./routes/studiesRoutes");
const occasionsRoutes = require("./routes/occasionsRoutes");
const prayersRoutes = require("./routes/prayersRoutes");
const financialRoutes = require("./routes/financialRoutes");

app.use(`${api}/members`, membersRoutes);
app.use(`${api}/churches`, churchesRoutes);
app.use(`${api}/studies`, studiesRoutes);
app.use(`${api}/occasions`, occasionsRoutes);
app.use(`${api}/prayers`, prayersRoutes);
app.use(`${api}/financial`, financialRoutes);

app.listen(5000, () => {
  console.log("server is running 5000");
});
