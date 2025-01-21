import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import UpdateWorkout from './pages/UpdateWorkout'
import WorkoutForm from './components/WorkoutForm'
import Navbar from './components/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/update/:id',
      element: <UpdateWorkout />
    },
    {
      path: 'add_workout',
      element: <div>
        <Navbar />
        <WorkoutForm />
      </div>
    },
    {
      path: '*',
      element: <h1 className='text-danger'>404 || NOTFOUND</h1>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
