import Sidebar from './components/Sidebar.jsx'
import Main from './components/Main.jsx'
import GamePage from './pages/GamePage.jsx'
import { CategoryProvider } from './context/Category.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import '@fontsource-variable/inter'
import { useState } from 'react'

const DEFAULT_VALUE = window.innerWidth > 768

function App () {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(DEFAULT_VALUE)

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  return (
    <CategoryProvider>
      <Sidebar isOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Main toggleSidebar={toggleSidebar} />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </CategoryProvider>
  )
}

export default App
