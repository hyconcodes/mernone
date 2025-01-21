const express = require('express');
const { createWorkout, getAllWorkout, getSingleWorkout, updateWorkout, deleteWorkout } = require('../controller/workoutController');

const router = express.Router();

router.get('/', getAllWorkout)

router.get('/:id', getSingleWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router;