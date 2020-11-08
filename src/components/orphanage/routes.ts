import { Router } from "express";

import { OrphanageController } from "./index";

const routes = Router();

routes.post("/", OrphanageController.create);
routes.get("/", OrphanageController.index);
routes.get("/:id", OrphanageController.show);

export default routes;
