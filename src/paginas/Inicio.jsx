import React ,{ useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {


  return (
    <div className='flex'>
        <div  className='flex flex-col justify-center items-center w-1/2 h-screen bg-[#ffca2a]'>
          <img className='md:w-[60%] mb-[100px]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
          <img className='md:w-[40%] mt-[100px]' src="https://media.giphy.com/media/xQMYEokueU2Ww16p8I/giphy.gif" alt='gif'/>
        </div>
        <div className='w-1/2 bg-white flex flex-col items-center justify-center'>
            <h1 className='text-[40px] mb-[50px] text-center'>Inicia Sesión</h1>
          <div className='flex flex-col'>
            <hr className='mb-[50px]'/>
            <p>¿Cuál es su correo electrónico?</p>
            <input type='text' placeholder='ingrese su email' className='w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
            <p>¿Cuál es tu contraseña?</p>
            <input type='text' placeholder='Ingrese su contraseña' className='w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
          </div>
      <Link to='/Pokedex'>
            <button className='bg-[#ffca2a] rounded-2xl mb-[30px] px-[20px] py-[5px] shadow-md hover:shadow-xl'>Ingresar como invitado</button>
      </Link>
            <button className='bg-[#ffca2a] rounded-2xl w-[100px] py-[5px] shadow-md hover:shadow-xl'>Ingresar</button>
        </div>
    </div>
  )
}

export default Inicio