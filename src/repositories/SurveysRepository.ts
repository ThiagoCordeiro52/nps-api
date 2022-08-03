import { AppDataSource } from "../database";
import { Survey } from "../models/Survey";

export const SurveysRepository = AppDataSource.getRepository(Survey);