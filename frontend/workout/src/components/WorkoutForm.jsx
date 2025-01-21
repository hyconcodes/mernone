import React, { useState } from 'react'
import instance from '../axiosInstance';

const WorkoutForm = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [loads, setLoads] = useState('');
    const [reps, setReps] = useState('');

    const handleWorkoutSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (!title || !loads || !reps) {
            setError('All fields are require...')
        } else {
            const data = { title, loads, reps }
            // console.log(data);
            try {
                const response = await instance.post('/', data )
                console.log(response);
                setTitle('')
                setReps('')
                setLoads('')
                setError(null)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }
    }
    return (
        <div>
            <div className="card p-3 border-0">
                <h5 className='fw-bold text-black'>Add a new workout</h5>
                <form onSubmit={handleWorkoutSubmit}>
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Loads</label>
                            <input value={loads} onChange={(e) => setLoads(e.target.value)} type="number" className="form-control" /></div>
                        <div className="mb-3">
                            <label className="form-label">Reps</label>
                            <input value={reps} onChange={(e) => setReps(e.target.value)} type="number" className="form-control" />
                            <small id="error" className="text-center text-danger fw-bold fst-italic">{error}</small>
                        </div>
                    </div>
                    <button disabled={isLoading} className='btn btn-sm bg-success text-white'>{isLoading ? 'Adding to workout collections' : 'Add Workout'}</button>
                </form>
            </div>
        </div>
    )
}

export default WorkoutForm
