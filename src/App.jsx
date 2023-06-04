import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './layout';
import { MainPage } from './pages';
import './App.css'


export default function App() {
  return (
    <Routes>
       <Route element={<Nav />}>
          <Route path='/' element={<MainPage />}/>
      </Route>
    </Routes>
  )
}
