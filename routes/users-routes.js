import express from 'express';
import pool from '../dbConfig.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password, password2 } = req.body;
    const saltRounds = 10;
    let errors = [];

    try {
        if(!name || !email || !password || !password2){
            errors.push({message: "Please enter all fields"});
        }
    
        if(password < 6) {
            errors.push({message: "Password needs to be at least 6 characters long"});
        }
    
        if(password != password2) {
            errors.push({message: "Passwords do not match"});
        }
    
        if(errors.length > 0) {
            res.json(errors)
        }

        if(!errors.length) {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            pool.query("SELECT * FROM users WHERE email = $1", [email], (err, results) => {
                if(err) {
                    throw err;
                }

                if(results.rows.length > 0){
                    res.status(400).json({
                        message: "Email is already in use",
                        ok: false,
                    });
                }

                if(!results.rows.length) {
                    pool.query(
                        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
                        [name, email, hashedPassword],
                        (err, results) => {
                            if(err){
                                throw err;
                            }
                            res.status(200).json({ 
                                message: "Register succesful!", 
                                ok: true,
                             });
                        }
                    )
                }
            })
        } 
        } catch (error) {
            console.log(error.message)
        }
});

export default router;