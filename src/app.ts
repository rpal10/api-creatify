import express = require("express");
import morgan = require("morgan");
import cors = require("cors");

import SongRoutes from "./routes/song.routes";

// initialization
const app = express();

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(`API ist at http://localhost:${app.get("port")}`);
});

app.use(SongRoutes);

export default app;
