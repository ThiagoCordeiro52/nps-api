import { Request, Response } from 'express';
import { SurveyRepository } from '../repositories/SurveysRepository';

class SurveysController {
  async create(request: Request, response: Response) {
    const {title, description} = request.body;

    const surveyRepository = SurveyRepository;

    const survey = surveyRepository.create({
      title,
      description
    })

    await SurveyRepository.save(survey);

    return response.status(201).json(survey);
  }
}

export { SurveysController };
