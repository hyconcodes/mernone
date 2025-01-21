const { default: mongoose } = require("mongoose");
const workoutModel = require("../models/workoutModel");

// POST METHODD
const createWorkout = async (req, res) => {
    const { title, loads, reps } = req.body
    try {
        const workout = await workoutModel.create({ title, loads, reps })
        res.status(201).json({ workout: workout, 'message': 'Workout created successfully' })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ 'error': error.message })
    }
}
// GET ALL METHOD
const getAllWorkout = async (req, res) => {
    try {
        const workout = await workoutModel.find({}).sort({ createdAt: -1 })
        res.status(200).json({
            'workout': workout
        })
    } catch (error) {
        res.status(500).json({ 'error': error.message })
    }
}
// GET A SINGLE RECORD?
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ 'error': 'ID not valid.' })
    }
    const workout = await workoutModel.findById({_id: id})
    if (!workout) {
        res.status(404).json({ 'error': 'Workout not available.' })
    }
    res.status(200).json({ workout })
}
// UPDATE A WORKOUT
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ 'error': 'ID not valid.' })
    }
    const workout = await workoutModel.findByIdAndUpdate({_id: id}, {...req.body})
    if (!workout) {
        res.status(404).json({ 'error': 'Workout not available' })
    }
    res.status(200).json({workout, 'msg': 'Workout updated successfully'})
}
// DELETE WORKOUTS
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ 'error': 'ID not valid.' })
    }
    const workout = await workoutModel.findByIdAndDelete({_id: id})
    if (!workout) {
        res.status(400).json({ 'error': 'Workout not available' })
    }
    res.status(200).json({workout, 'msg': 'Workout delete successfully'})
}
module.exports = {
    createWorkout,
    getAllWorkout,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
}