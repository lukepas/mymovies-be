import express from 'express';
import pool from '../dbConfig.js';
import bcrypt from 'bcrypt';
import { jwtTokens } from '../utils/jwt-helpers.js';

const router = express.Router();

router.post('/login', async (req,res) => {
    try {
        const { email, password } = req.body;
        const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (users.rows.length === 0) return res.status(401).json({error:"Email or password is incorrect"});
        // PASSWORD CHECK
        const validPassword = await bcrypt.compare(password, users.rows[0].password);
        if(!validPassword) return res.status(401).json({error:"Email or password is incorrect"});
        //JWT
        const tokens = jwtTokens(users.rows[0]);
        res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
        return res.status(200).json(tokens);

    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})



export default router; 