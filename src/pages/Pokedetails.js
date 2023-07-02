import React from 'react'
import Layout from '../components/Layout/Layout'
import '../PokemonComponents/style.css'
import Main from '../PokemonComponents/Main';
import { useAuth } from '../Context/auth'
const Pokedetails = () => {
  const [auth,setAuth]=useAuth();
  return (
    <Layout>
       

      <Main/>
        {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}

    </Layout>
  )
}

export default Pokedetails