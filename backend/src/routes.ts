import { Router} from "express";
import { UserController } from "./controllers/user/UserController";
import { AuthUserController } from "./controllers/user/AuthController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CategoryController } from "./controllers/category/CategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { ProductController } from "./controllers/product/ProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { OrderController } from "./controllers/order/OrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";

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
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//order routes
router.post('/orders', isAuthenticated, new OrderController().handle)
router.delete('/delete-order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('order/send', isAuthenticated, new SendOrderController().handle)
router.get('/allorders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

export {router}