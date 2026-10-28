import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Laboratorio from './components/Laboratorio'
import TestesFuncionais from './pages/TestesFuncionais'

import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <Laboratorio />
    </>
  )
}

function App() {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/laboratorio/testes-funcionais"
          element={<TestesFuncionais />}
        />
      </Routes>
    </main>
  )
}

export default App