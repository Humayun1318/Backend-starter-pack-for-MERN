import express, { Application, Request, Response } from 'express';
import { Router } from 'express';

const app: Application = express();
const router = Router();
//parsers
app.use(express.json());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Developer Start With this pack!');
});

export default app;
