import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/Inicio'
import PaginaPokemon from './paginas/PaginaPokemon'
import "@fontsource/poppins";
import Pokedex from './paginas/Pokedex'

function App() {


  return (
    <div className='w-full letra  m-auto h-full'>
   <BrowserRouter>
    <Routes>
      <Route 
       path='/'
       element={<Inicio 
       
       />}
      />
      <Route 
       path='Pokedex'
       element={<Pokedex 
       
       />}
      />
      <Route 
       path='/PaginaPokemon/:id'
       element={<PaginaPokemon
       
       />}
      />
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
