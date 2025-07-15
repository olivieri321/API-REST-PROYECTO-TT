
import "dotenv/config"
import express from "express"
import cors from "cors"
import productsrouter from "./src/routes/products.routes.js"
import authrouter from "./src/routes/auth.routes.js"

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api",productsrouter); // api productos
app.use("/auth", authrouter);   // manejo de cuentas 

app.use((req,res, next) =>{
    res.status(404).json({error: "not found"})
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("http://localhost:"+PORT)) 