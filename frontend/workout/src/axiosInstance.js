import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:4000/api/workouts'
})
export default instance