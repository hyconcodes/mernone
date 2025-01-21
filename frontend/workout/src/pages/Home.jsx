import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import instance from '../axiosInstance'
import WorkoutList from '../components/WorkoutList';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = async () => {
        const response = await instance.get('/')
        setWorkouts(response.data.workout);
        console.log(response);
    }
    useEffect(() => {
        fetchWorkouts()
    }, [])

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row mt-3">
                <div className="col-lg-8">
                    {
                        workouts.map((item) => (
                            <WorkoutList fetchWorkouts={fetchWorkouts} item={item} key={item._id} />
                        ))
                    }
                </div>

                <div className="col-lg-4">
                    <WorkoutForm fetchWorkouts={fetchWorkouts} />
                </div>
            </div>
        </div>

    )
}

export default Home
