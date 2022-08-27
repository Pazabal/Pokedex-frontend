import { SingleBedOutlined } from '@material-ui/icons'
import React ,{ useState , useEffect } from 'react'
import { Link } from 'react-router-dom'



const Inicio = () => {
  
const [name, setName] = useState('');
const [password, setPassword] = useState('');

const login = async () => {
  console.log('login ejecuta')
  await fetch('http://localhost:4000/register/login', {method:'POST', headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}, mode:'cors', body:JSON.stringify({'name':name, 'password':password})})
  .then((res) => {return res.json()})
   //ver si hacemos recorrido

}
  return (
    <div className='flex'>
        <div  className='hidden md:flex md:flex-col md:justify-center md:items-center w-1/2 h-screen bg-[#ffca2a]'>
          <img className='md:w-[60%] mb-[100px]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
          <img className='md:w-[40%]' src="https://media.giphy.com/media/xQMYEokueU2Ww16p8I/giphy.gif" alt='gif'/>
        </div>
        <div className='md:w-1/2 w-[390px] h-screen bg-white flex flex-col items-center justify-center'>
          <img className='md:hidden w-[60%] mb-[50px]' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png' />
          <h1 className='text-[30px] md:text-[40px] mb-[50px] text-center'>Inicia Sesión</h1>
          <div className='flex flex-col w-[80%] md:w-full items-center justify-center'>
            <div className='w-[90%] md:w-1/2'>
              <hr className='mb-[50px]'/>
              <p>¿Cuál es su nombre?</p>
              <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='ingrese su nombre' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
            </div>
            <div className='w-[90%] md:w-1/2'>
              <p>¿Cuál es su contraseña?</p>
              <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Ingrese su contraseña' className='w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[50px] rounded-xl py-[5px] shadow-md hover:shadow-xl'></input>
            <div className='flex justify-center'>
              <button className='bg-[#ffca2a] rounded-2xl w-[100px] py-[5px] shadow-md hover:shadow-xl' onClick={() => login()}>Ingresar</button> 
              
              {/* OnClick - fetch que ejecuta la api con un post (crear objecto que se llene con input user y contra, booleano. Se pasa entre componentes el boton de agregar) */}

            </div>
              <hr className='my-[50px]'/>
            </div>
          </div>
          <div className='md:mt-[20px]'>
            <Link to='/Pokedex'>
              <button className='bg-[#ffca2a] rounded-2xl  px-[20px] py-[5px] shadow-md hover:shadow-xl'>Ingresar como invitado</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Inicio