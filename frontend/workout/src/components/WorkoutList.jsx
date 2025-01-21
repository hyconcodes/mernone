import React from 'react'
import instance from './../axiosInstance';
import { Link } from 'react-router-dom';

const WorkoutList = ({ item, fetchWorkouts }) => {
    const handleWorkoutDelete = async (_id) => {
        console.log(_id);
        if (window.confirm('Are you sure you want to delete this workout?')) {
            try {
                const response = await instance.delete(`/${_id}`)
                console.log(response);
                fetchWorkouts()
            } catch (error) {
                console.log(error.response);
            }
        }
    }
    return (
        <div key={item._id} className="card shadow-lg p-3 border-0 mb-3">
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-black"><strong>Title: </strong>{item.title}</p>
                <i onClick={() => handleWorkoutDelete(item._id)} style={{ cursor: 'pointer' }} className='bi bi-trash3-fill text-danger'></i>
            </div>
            <p><strong>Loads in KG: </strong>{item.loads}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p><strong>Repeats: </strong>{item.reps}</p>
                <Link to={`/update/${item._id}`}><i style={{ cursor: 'pointer' }} className='bi bi-pencil-square text-success'></i></Link>
            </div>
        </div>
    )
}

export default WorkoutList
