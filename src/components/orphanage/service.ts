import { getRepository } from "typeorm";

import { OrphanageModel } from "./index";

export default class OrphanageService {
  public static async create(orphanage: {
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    openingHours: string;
    openOnWeekends?: boolean;
  }) {
    await getRepository(OrphanageModel).insert(orphanage);
  }
}
