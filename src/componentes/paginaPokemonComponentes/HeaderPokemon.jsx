import React from 'react'
import Carta from './Carta'
import Pokeball from '../../imagenes/Pokeball.png'
import {Link} from 'react-router-dom'

const HeaderPokemon = ({pokemonType2, pokemonType, pokemonId, pokemonTypes, name , id ,  selectedPokemonDetails, selectedPokemonText, selectedPokemonHP, selectedPokemonDEF,selectedPokemonATK,selectedPokemonSDEF,selectedPokemonSATK,selectedPokemonSPD}) => {

  const nextPokemon = parseInt(id) + 1;
  const previousPokemon = parseInt(id) - 1;

  return ( 
    <div className={`flex ${pokemonType} flex-col md:items-center md:justify-center h-screen w-full`}>
      <div className=' flex flex-col md:p-[3px] md:justify-center md:border-white md:border-4 md:rounded-xl md:hover:shadow-2xl'>
        <div className='flex items-center justify-between mx-[20px] mt-[20px] text-white'>
          <div className='flex'>

            <Link to={`/ `}>        
              <i className="fa-solid flex  text-[25px] fa-arrow-left mr-[20px]"></i>
            </Link>
            <p className='capitalize text-2xl'>{name}</p>
          </div>
          <div className={`text-2xl`}>
              {(() => {
                if (id<10) {
                  return (
                    <p>#00{id}</p>
                    )
                  } else {
                    return (
                      <p>#0{id}</p>
                      )
                    }
                  })()}
          </div>
        </div>
      
        <div>
        <img 
        className='opacity-5 static ml-[185px] h-[200px] w-[200px]'
        src={Pokeball} alt="" />
        </div>
      
       {(pokemonId < 2) ? <Link  to={`/PaginaPokemon/${nextPokemon} `} >
          <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right "></i>
          </Link>
         : 
        <div className='flex items-center justify-between'> 
          <Link to={`/PaginaPokemon/${previousPokemon} `} >
            <i className="fa-solid flex  text-[25px] text-white ml-6  fa-arrow-left "></i>
          </Link> 
          <Link to={`/PaginaPokemon/${nextPokemon} `} > 
            <i className="fa-solid flex  text-[25px] text-white mr-6  fa-arrow-right "></i>
          </Link> 
        </div>}
      
      <img 
      className='flex  top-[185px]  left-0 right-0 h-[250px] m-auto w-[250px] absolute'
      src={selectedPokemonDetails.sprites && selectedPokemonDetails.sprites.other.dream_world.front_default} alt="" />
       <Carta
        pokemonType={pokemonType}
        pokemonType2={pokemonType2}
        selectedPokemonDetails={selectedPokemonDetails}
        selectedPokemonText={selectedPokemonText}
        selectedPokemonHP={selectedPokemonHP} 
        selectedPokemonDEF={selectedPokemonDEF}
        selectedPokemonATK={selectedPokemonATK}
        selectedPokemonSDEF={selectedPokemonSDEF}
        selectedPokemonSPD={selectedPokemonSPD}
        selectedPokemonSATK={selectedPokemonSATK}
        pokemonTypes={pokemonTypes}
        
       />
      
    </div>
    </div>
  )
}

export default HeaderPokemon