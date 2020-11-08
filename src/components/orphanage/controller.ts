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

  public static async index(req: Request, res: Response) {
    return OrphanageService.index()
      .then((orphanages) => res.status(200).json(orphanages))
      .catch((err) => res.status(500).json(err.message));
  }
}
