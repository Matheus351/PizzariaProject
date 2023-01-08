import { Router} from "express";
import { UserController } from "./controllers/user/UserController";
import { AuthUserController } from "./controllers/user/AuthController";
const router = Router()

//users routes
router.post('/users', new UserController().handle)
router.post('/login', new AuthUserController().handle)


export {router}