import { Router } from "express"
import  v1Routes  from "./api/v1"

const routes = Router();

routes.use("/v1", v1Routes)
export default routes