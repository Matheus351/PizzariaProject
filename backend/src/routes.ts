import { Router} from "express";
import { UserController } from "./controllers/user/UserController";
import { AuthUserController } from "./controllers/user/AuthController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CategoryController } from "./controllers/category/CategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { ProductController } from "./controllers/product/ProductController";

import uploadConfig from './config/multer'
import multer from "multer";


const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

//users routes
router.post('/users', new UserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/user', isAuthenticated, new DetailUserController().handle)

//categories routes
router.post('/categories', isAuthenticated, new CategoryController().handle)
router.get('/allcategories', isAuthenticated, new ListCategoryController().handle)

//products routes
router.post('/product', isAuthenticated, upload.single('file'), new ProductController().handle)


export {router}