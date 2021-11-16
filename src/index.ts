import cors from 'cors';
import express from 'express';
import chatbot from './chatbot';
import logger from './infra/logger';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3333;

const bot = chatbot();

app.listen(PORT, () => {
  logger.info(`Web server listening on port ${PORT}`);
  bot.start();
});
