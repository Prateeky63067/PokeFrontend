import React from 'react'
import Layout from '../components/Layout/Layout'
import '../PokemonComponents/style.css'
import Main from '../PokemonComponents/Main';
import { useAuth } from '../Context/auth'
import '../pages/homeStyle.css'
import { NavLink,Link } from 'react-router-dom'
const Home = () => {
  const [auth,setAuth]=useAuth();
  
  return (
    <Layout>
       
       <section id="hero-image">
                <div class="hero-marketing-text">
                    <h1>The Best <span>PokeMon</span> Out There</h1>
                    <h5>Here at PokeMon App you can see all available pokemon and you can Adopt it.App contain of many feature like Adopatation of pokemon. You can make collection of pokemon and it will seperately stored on your profile</h5>
                    <NavLink to="/pokedetails"   >
                    <button >Adopt</button>
                    </NavLink>
                </div>
       </section>
      
        

    </Layout>
  )
}

export default Home