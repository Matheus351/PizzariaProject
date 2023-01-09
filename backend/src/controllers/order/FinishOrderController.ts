import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController{

    async handle(req:Request, resp:Response){

        const order_id = req.body

        const finishOrderService = new FinishOrderService()

        const order = await finishOrderService.execute({order_id})

        return resp.json(order)
    }
}

export {FinishOrderController}