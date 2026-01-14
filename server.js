import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import usersRoutes from "./user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/api/users", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
