import { Router, Request, Response } from "express";

const router = Router()

router.get('/test', (req:Request, resp:Response)=>{
 throw new Error('Erro ao fazer essa requisiçao')
})

export {router}