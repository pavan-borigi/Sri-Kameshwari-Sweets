import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  )
}

export default App
