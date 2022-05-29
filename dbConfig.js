import pg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pg;

dotenv.config();

const poolConfig = {
  user: process.env.USER || 'postgres',
  password: process.env.PASSWORD || 'postgres',
  host: process.env.HOST || 'localhost',
  port: process.env.LOCAL_PORT || '5432',
  database: process.env.DATABASE || 'favoritemovies'
};

const pool = new Pool(poolConfig);
export default pool;