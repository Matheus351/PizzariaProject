import { Router} from "express";
import { UserController } from "./controllers/user/UserController";
const router = Router()

//users routes
router.post('/users', new UserController().handle)

export {router}