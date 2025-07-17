import "dotenv/config"
import express from "express"
import cors from "cors"
import productsrouter from "./src/routes/products.router.js"
import authrouter from "./src/routes/auth.router.js"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api",productsrouter); // api productos
app.use("/auth", authrouter);   // login

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.use((req,res, next) =>{
    res.status(404).json({error: "not found"})
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("http://localhost:"+PORT)) 