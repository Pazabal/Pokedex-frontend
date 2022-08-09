import React ,{useState} from 'react'
import Pokeball from '../../imagenes/Pokeball.png'
import { Link } from 'react-router-dom'



const Header = ({handleString, handleNumeric}) => {
    
  const [sortByNumber, setSortByNumber] = useState(true)

  const handleChange = () => {
    if(!sortByNumber) {
     handleString()
    } else {
      handleNumeric()
    }
    setSortByNumber(!sortByNumber)
  }

 

  return (
    <div className='flex items-center justify-between m-[30px]'>
      <Link to='/'>
        <div className='flex items-center'>
          <img
          className='w-[50px] md:w-[100px] md:h-[100px] mr-[30px]'
          src={Pokeball}  alt="" />

          <h1
          className='text-gray-800 text-[30px] md:text-[50px] font-bold'
          >Pokédex</h1>
        </div>
      </Link>
      <button
          className=''
          onClick={() => handleChange()}
          >

            {sortByNumber ? <i className={`fa-solid hover:border-2 hover:shadow-lg text-[25px] fa-arrow-down-a-z`}></i> :  <i className={`fa-solid text-[25px] hover:shadow-lg fa-arrow-down-1-9`}></i>}
      </button>
    </div>
  )
}

export default Header