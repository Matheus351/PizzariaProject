import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CategoryController{
   
    async handle(req:Request, resp:Response){

        const {name} = req.body

        const categoryService = new CreateCategoryService()

        const category = await categoryService.execute({name})

        return resp.json(category)
    }
}

export {CategoryController}