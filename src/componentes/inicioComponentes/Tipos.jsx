import React from 'react'

const Tipos = () => {
  return (
    <div className='w-1/2 flex flex-col'>
        <label>Tipos</label>
        <div className='flex my-[50px] justify-center flex-col w-full p-[20px] bg-white rounded-xl shadow-md hover:shadow-xl'>
            <input type='checkbox' class='checked:bg-[#ffca2a]'/>Planta
            <input type='checkbox'/>Fuego
            <input type='checkbox'/>Agua
            <input type='checkbox'/>Insecto
            <input type='checkbox'/>Normal
            <input type='checkbox'/>Volador
            <input type='checkbox'/>Venenoso
            <input type='checkbox'/>Electrico
            <input type='checkbox'/>Tierra
        </div>
    </div>
  )
}

export default Tipos