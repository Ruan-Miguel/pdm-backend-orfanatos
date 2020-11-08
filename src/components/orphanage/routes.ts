import { Router } from "express";

import { OrphanageController } from "./index";

const routes = Router();

routes.post("/", OrphanageController.create);

export default routes;
