import { Request, Response } from "express";

import { OrphanageService } from "./index";

export default class OrphanageController {
  public static async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
    } = req.body;

    return OrphanageService.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
    })
      .then(() => res.status(201).send())
      .catch((err) => res.status(400).json(err.message));
  }
}
