import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './layout';
import { MainPage } from './pages';
import './App.css'


export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        }
  }, [darkMode])

  return (
    <Routes>
       <Route element={<Nav darkMode={darkMode} setDarkMode={setDarkMode}/>}>
          <Route path='/' element={<MainPage />}/>
      </Route>
    </Routes>
  )
}
