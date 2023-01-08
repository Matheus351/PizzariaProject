import express,{ Express } from "express";
import { router } from "./routes";

const app = express()

app.use(express.json())

app.use(router)//application routes

app.listen(3333, ()=>console.log('Servidor rodando'))