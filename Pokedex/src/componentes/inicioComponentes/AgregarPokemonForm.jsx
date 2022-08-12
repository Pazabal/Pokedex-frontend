import React from 'react'
import { Link } from 'react-router-dom'
import Tipos from './Tipos'

const AgregarPokemonForm = () => {
  return (
    <div className='w-full bg-[#ffca2a] h-full pt-[50px]'>
        <div className='flex w-4/5 md:w-1/3 h-full m-auto  border-black border-[0.1px] fuente flex-col bg-[#F7F7F7] rounded-xl '>
            <h1 className='flex justify-center my-[100px] font-bold text-4xl'>Agregar Pokemon</h1>
            <form className='flex flex-col w-[80%] md:w-full items-center justify-center'>
                <div className='w-[90%] md:w-1/2'>
                    <label>ID</label>
                    <input type='number' placeholder='Ingrese el ID' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label>Nombre</label>
                    <input type='text' placeholder='ingrese el nombre' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label>URL de la imagen</label>
                    <input type='url' placeholder='ingrese el url' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <Tipos/>
                <div className='w-[90%] md:w-1/2'>
                    <label>Descripción</label>
                    <textarea placeholder='ingrese la descripcion' className='w-full pl-[20px]  mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></textarea>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label>Peso</label>
                    <input type='number' placeholder='Ingrese el peso' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label>Altura</label>
                    <input type='number' placeholder='Ingrese la altura' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label>Movimientos</label>
                    <input type='text' placeholder='Movimiento 1' className='w-full pl-[20px] mt-[10px]  rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input type='text' placeholder='Movimiento 2' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <div className='w-[90%] md:w-1/2'>
                    <label>Stats</label>
                    <input type='number' placeholder='HP' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input type='number' placeholder='ATK' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input type='number' placeholder='DEF' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input type='number' placeholder='SATK' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input type='number' placeholder='SDEF' className='w-full pl-[20px] mt-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                    <input type='number' placeholder='SPD' className='w-full pl-[20px] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
                </div>
                <Link to={`/Pokedex`}>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-[#ffca2a] rounded-2xl mb-[100px] px-[10px] py-[5px] shadow-md hover:shadow-xl'>Agregar Pokemon</button>
                    </div>
                </Link>
            </form>
        </div> 
    </div>
  )
}

export default AgregarPokemonForm

{/* <input value={item} type="checkbox" onChange={handleCheck} /> */}
