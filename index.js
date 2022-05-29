import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/users-routes.js';
import moviesRouter from './routes/movies-routes.js';
import authRouter from './routes/auth-routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {credentials: true, origin: process.env.URL || '*'}

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/api', usersRouter);
app.use('/api', moviesRouter);
app.use('/api', authRouter);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
