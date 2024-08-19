import fs from 'node:fs';
import createHttpError from 'http-errors';
import swaggerUI from 'swagger-ui-express';

import { SWAGGER_PATH } from '../constants/index.js';

export const swaggerDocs = () => {
  try {
    const doc = JSON.parse(
      fs.readFileSync(SWAGGER_PATH, { encoding: 'utf-8' }),
    );
    return [...swaggerUI.serve, swaggerUI.setup(doc)];
  } catch {
    return (req, res, next) => {
      next(createHttpError(500, 'Can not load swagger docs'));
    };
  }
};
