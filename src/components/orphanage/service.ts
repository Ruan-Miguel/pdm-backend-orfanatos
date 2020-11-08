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
    images: { path: string }[];
  }) {
    const orphanageRepository = getRepository(OrphanageModel);
    const teste = orphanageRepository.create(orphanage);

    await orphanageRepository.save(teste).catch((err) => console.log(err));
  }

  public static async index() {
    return getRepository(OrphanageModel).find();
  }

  public static show(id: number) {
    return getRepository(OrphanageModel).findOneOrFail(id);
  }
}
