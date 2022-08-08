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
// router.get('/', (req, res) => {
//     res.json({ mesg: 'GET all workouts' });
// });
router.get('/', getWorkouts);


// GET a single workout
// router.get('/:id', (req, res) => {
//     res.json({ mesg: 'GET a single workout' });
// });
router.get('/:id', getWorkout);


// POST a new workout
// router.post('/', async (req, res) => {
//     const { title, load, reps } = req.body

//     try {
//         const workout = await Workout.create({ title, load, reps })
//         res.status(200).json(workout)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// });
router.post('/', createWorkout);


// DELETE a workouts
// router.delete('/:id', (req, res) => {
//     res.json({ mesg: 'DELETE a workout' });
// });
router.delete('/:id', deleteWorkout);


// UPDATE a workout
// router.patch('/:id', (req, res) => {
//     res.json({ mesg: 'UPDATE a workout' });
// });
router.patch('/:id', updateWorkout);


module.exports = router;