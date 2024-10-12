import { Application } from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerPath = path.resolve(__dirname, '..', 'docs', 'swagger.yaml')
const swaggerDocument = YAML.load(swaggerPath);

const setupSwagger = (app: Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;
