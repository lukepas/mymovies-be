import express from 'express';
import pool from '../dbConfig.js';
import { authenticateToken } from '../middleware/authorization.js'

const router = express.Router();

// Add movie

router.post("/movies", authenticateToken, async (req, res) =>{
    try {
        const { title } = req.body;
        const newMovie = await pool.query("INSERT INTO movies (title) VALUES($1) RETURNING *", [title]);

        res.json(newMovie.rows);
    } catch (error) {
        console.error(error.message)
    }
});

//Get all movies

router.get("/movies", authenticateToken, async (req, res) => {
    try {
        const allMovies = await pool.query("SELECT * FROM movies");

        res.json(allMovies.rows);
    } catch (error) {
        console.log(error.message)
    }
})

//Get movie by id

router.get("/movie/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);

        res.json(movie.rows);
    } catch (error) {
        console.log(error.message)
    }
})

//Update movie

router.put("/movie/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const updateMovie = await pool.query("UPDATE movies SET title = $1 WHERE id = $2", [title, id])

        res.json("Movie was updated");
    } catch (error) {
        console.log(error.message)
    }
})

//Delete movie

router.delete("/movie/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMovie = await pool.query("DELETE FROM movie WHERE id = $1", [id])

        res.json("Movie was deleted");
    } catch (error) {
        console.log(error.message)
    }
})

export default router;