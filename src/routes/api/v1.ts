
import { Router } from "express"
import  aiRoutes  from "./v1/ai"
//const tools = require("../../model/tools");
const routes = Router()
routes.use("/ai", aiRoutes)
export default routes