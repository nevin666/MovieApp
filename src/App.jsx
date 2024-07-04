import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewmovie from './Components/Viewmovie'
import Addmovies from './Components/Addmovies'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path= '/view' element={<Viewmovie />}></Route>
      <Route path='/add' element={<Addmovies />}></Route>
    </Routes>
    </>
  )
}

export default App
