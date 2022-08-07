const express = require('express');

// Gestionnaire de requêtes
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({mesg: 'GET all workouts'});
});

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mesg: 'GET a single workout'});
});

// POST a new workout
router.post('/', (req, res) => {
    res.json({mesg: 'POST a new workout'});
});

// DELETE a workouts
router.delete('/:id', (req, res) => {
    res.json({mesg: 'DELETE a workout'});
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mesg: 'UPDATE a workout'});
});


module.exports = router;