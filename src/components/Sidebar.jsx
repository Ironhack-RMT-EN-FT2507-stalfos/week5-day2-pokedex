import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// to receive a list of 20 pokemon and create a link for each one of them

// "https://pokeapi.co/api/v2/pokemon"
//0. when do we call the API? useEffect with the componentDidMount execution
//1. how do we contact the API? fetch() or axios()
//2. how do we process the call of the API? async/await or then/catch
//3. how do we receive the data? we will store it in a state [..., ... ,...]
//4. how do we render this data? .map() and keys

function Sidebar() {

  const [ allPokemon, setAllPokemon ] = useState([])
  
  useEffect(() => {
    
    // fetch("https://pokeapi.co/api/v2/pokemon")
    // .then((response) => {
    //   console.log(response)
    //   return response.json() // convert the data to json
    // })
    // .then((response) => {
    //   console.log(response)
    //   setAllPokemon(response.results)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000")
    .then((response) => {
      console.log(response)
      setAllPokemon(response.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [])

  return (
    <nav className="sidebar">
      
      {/* example of 3 links */}
      {/* <Link to={"/"}>bulbasaur</Link>
      <Link to={"/"}>charmander</Link>
      <Link to={"/"}>squirtle</Link> */}

      {allPokemon.map(({name}) => {
        return (
          <Link to={`/pokemon-details/${name}`} key={name}>{name}</Link>
        )
      })}

    </nav>
  )
}

export default Sidebar