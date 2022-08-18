import { useEffect, useState } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
import HeaderPokemon from './HeaderPokemon'

const Fondo = ({id}) => {

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({})
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonType2 , setPokemonType2] = useState ('')
  const [selectedPokemonText, setSelectedPokemonText] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
  const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
  const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
  const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
  const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
  const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
  const [pokemonId, setPokemonId] = useState("")

const getPokemonDetails = () => {
  fetch(`http://localhost:4000/pokemon/${id}`) //pasar id en un fetch en la response del json
  
  .then(res => res.json())
  .then((fetchedPokemon) => {
    console.log(id);
    console.log(fetchedPokemon);
      setSelectedPokemonDetails(fetchedPokemon);
      setPokemonType(fetchedPokemon.types[0].name)
      setPokemonType2(fetchedPokemon.types[1]?.name)
      setPokemonTypes(fetchedPokemon.types)
      console.log(pokemonTypes)
      setSelectedPokemonHP(fetchedPokemon.datos_pokemon.hp)
      setSelectedPokemonATK(fetchedPokemon.datos_pokemon.atk)
      setSelectedPokemonDEF(fetchedPokemon.datos_pokemon.def)
      setSelectedPokemonSATK(fetchedPokemon.datos_pokemon.satk)
      setSelectedPokemonSDEF(fetchedPokemon.datos_pokemon.sdef)
      setSelectedPokemonSPD(fetchedPokemon.datos_pokemon.spd)
      setPokemonId(fetchedPokemon.id)
      
  })
  .catch ((error) => {
      console.log(error)
  })
}

const getPokemonText = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  .then(res => res.json())
  .then((fetchedPokemon) => {
  setSelectedPokemonText(fetchedPokemon.flavor_text_entries[5].flavor_text)
      
      
  })
  .catch ((error) => {
      console.log(error)
  })
}

// const Card = () => {
//   const {id}=useParams();
  
//   const [pokeDetail, setPokeDetail] = useState({})
//   const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//       setIsLoading(true);
//         fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
//           .then((response) => response.json())
//           .then((resultado) => {
//             console.log('resultado:', resultado)
//             setPokeDetail(resultado)
//             setIsLoading(false);
//           })
//       }, [id]);
//       console.log({id})
//         console.log(pokeDetail)


useEffect(() => {
  getPokemonDetails()
  getPokemonText()
} , [id]);

console.log(pokemonId)

  return (
    <>
      <div className="h-auto w-auto"> 
          
        <HeaderPokemon 
        name={selectedPokemonDetails.name}
        pokemonTypes={pokemonTypes}
        pokemonType={pokemonType}
        pokemonType2={pokemonType2}
        id={selectedPokemonDetails.id}
        selectedPokemonDetails={selectedPokemonDetails}
        selectedPokemonText={selectedPokemonText}
        selectedPokemonHP={selectedPokemonHP}
        selectedPokemonDEF={selectedPokemonDEF}
        selectedPokemonATK={selectedPokemonATK}
        selectedPokemonSATK={selectedPokemonSATK}
        selectedPokemonSDEF={ selectedPokemonSDEF}
        selectedPokemonSPD={ selectedPokemonSPD}
        pokemonId={pokemonId}
        />

       

      </div> 
    </>
  )
}

export default Fondo