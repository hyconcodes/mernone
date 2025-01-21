import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import instance from '../axiosInstance';

const UpdateWorkout = () => {
    const id = useParams()
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [loads, setLoads] = useState('');
    const [reps, setReps] = useState('');

    const fetchCurrentWorkout = async () => {
        const response = await instance.get(`/${id}`)
        console.log(response.data);
    }
    useEffect(() => {
        fetchCurrentWorkout()
    }, [])

    const handleWorkoutUpdate = async (e) => {
        e.preventDefault()
        const data = { title, loads, reps }
        console.log(data, id);
    }
    return (
        <div>
            <Navbar />
            <div className="card p-3 border-0">
                <h5 className='fw-bold text-black'>Add a new workout</h5>
                <form onSubmit={handleWorkoutUpdate}>
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

export default UpdateWorkout
