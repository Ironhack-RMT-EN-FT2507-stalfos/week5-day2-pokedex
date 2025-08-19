import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PokemonDetails() {

  const [ pokemon, setPokemon ] = useState(null) // we don't have the data yet

  const params = useParams()
  console.log(params)

  useEffect(() => {
    getData()
  }, [params.pokemonName])

  const getData = async () => {

    setPokemon(null) // this will force the loading while fetching the new data

    try {
      
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      console.log(response.data)
      setPokemon(response.data)

    } catch (error) {
      console.log(error)
    }

  }

  if (pokemon === null) {
    // the document has not been received yet
    return (<h3>Loading...</h3>)
  }

  return (
    <div>
      
        <h3>Pokemon Details</h3>

        <h4>{pokemon.name}</h4>

        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>

        <img src={pokemon.sprites.front_default} alt="" />

    </div>
  )
}
export default PokemonDetails