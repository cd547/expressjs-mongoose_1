import { Router } from "express"
import { aiAdd, tokenSize } from "../../../controllers/ai"
const routes = Router()
//
routes.post("/add", aiAdd)
//
routes.post("/tokenSize", tokenSize)
export default routes;