import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class OrderController{
   
    async handle(req:Request, resp:Response){

        const {table, name} = req.body
        
        const orderService = new CreateOrderService()

        const order = await orderService.execute({table, name})

        return resp.json(order)
    }
}

export {OrderController}