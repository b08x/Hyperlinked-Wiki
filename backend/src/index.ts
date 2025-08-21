import express, { Express, Request, Response as ExpressResponse, json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(json());

// Health check endpoint
app.get('/api/health', (req: Request, res: ExpressResponse) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
