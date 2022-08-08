const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

// Gestionnaire de requêtes
const router = express.Router();


// GET all workouts
router.get('/', getWorkouts);


// GET a single workout
router.get('/:id', getWorkout);


// POST a new workout
router.post('/', createWorkout);


// DELETE a workouts
router.delete('/:id', deleteWorkout);


// UPDATE a workout
router.patch('/:id', updateWorkout);


module.exports = router;