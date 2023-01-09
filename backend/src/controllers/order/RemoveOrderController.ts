import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController{
   
    async handle(req:Request, resp:Response){

        const order_id = req.query.order_id as string
        
        const orderRemoveService = new RemoveOrderService()

        const order = await orderRemoveService.execute({order_id})

        return resp.json(order)
    }
}

export {RemoveOrderController}