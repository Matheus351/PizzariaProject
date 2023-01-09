import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController{

    async handle(req:Request, resp:Response){
      const {order_id, product_id, amount} = req.body

      const listOrdersService = new ListOrdersService()

      const orders = await listOrdersService.execute()
      
      return resp.json(orders)

    }
}

export {ListOrdersController}