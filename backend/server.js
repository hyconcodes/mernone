
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const workoutsRoutes = require('./routes/workouts')
const { default: mongoose } = require('mongoose')
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
app.use(express.json()) // Parsing incoming requests

app.use(cors()) // CORS middleware

app.use('/api/workouts', workoutsRoutes)

// app.get('/', (req, res) => {
//     res.json({
//         'msg': 'We are learning nodejs and express',
//         'total_users' : 5007,
//         'path' : req.path,
//         'method' : req.method
//     })
// })

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('We are connected and listening at port', process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})