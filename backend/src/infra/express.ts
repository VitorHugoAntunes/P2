import express, { Express } from 'express';
import { router } from './router';

export const app: Express = express();

app.use(express.json())

app.use('/api', router);