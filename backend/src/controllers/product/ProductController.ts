import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class ProductController{

    async handle(req:Request, resp:Response){

        const {name, price, description, category_id} = req.body

        const createProdutcService = new CreateProductService()

        if(!req.file){
           throw new Error('Error upload file')
        }else{
            
            const {filename:banner} = req.file

            const product = await createProdutcService.execute({
                name,
                price,
                description,
                banner,
                category_id
            })
    
            return resp.json(product)
        }

     

    }
}

export {ProductController}