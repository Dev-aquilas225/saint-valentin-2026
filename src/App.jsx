import { Routes, Route } from 'react-router-dom'
import './App.css'
import FloatingHearts from './components/FloatingHearts'
import HomePage from './pages/HomePage'
import ValentineExperience from './pages/ValentineExperience'

function App() {
  return (
    <>
      <FloatingHearts />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pour/:name" element={<ValentineExperience />} />
      </Routes>
    </>
  )
}

export default App
