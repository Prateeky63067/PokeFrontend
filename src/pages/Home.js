// import React from 'react'
// import Layout from '../components/Layout/Layout'
// import '../PokemonComponents/style.css'
// import Main from '../PokemonComponents/Main';
// import { useAuth } from '../Context/auth'
// import '../pages/homeStyle.css'
// import { NavLink,Link } from 'react-router-dom'
// const Home = () => {
//   const [auth,setAuth]=useAuth();
  
//   return (
//     <Layout>
//  <div className='homecon'>
//        <section id="hero-image">
//                 <div class="hero-marketing-text">
//                     <h1>The Best <span>PokeMon</span> Out There</h1>
//                     <h5>Here at PokeMon App you can see all available pokemon and you can Adopt it.App contain of many feature like Adopatation of pokemon. You can make collection of pokemon and it will seperately stored on your profile</h5>
//                     <NavLink to="/pokedetails"   >
//                     <button >Adopt</button>
//                     </NavLink>
//                 </div>
//        </section>
//     <video autoPlay   loop id="myVideo">
//   <source src="./videoplayback.mp4" type="video/mp4" />
//   </video>
        
// </div>
//     </Layout>
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import '../PokemonComponents/style.css';
import Main from '../PokemonComponents/Main';
import { useAuth } from '../Context/auth';
import '../pages/homeStyle.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [shouldMute, setShouldMute] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = (event) => {
      setShouldMute(event.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className='homecon'>
        <section id="hero-image">
          <div className="hero-marketing-text">
            <h1>The Best <span>PokeMon</span> Out There</h1>
            <h5>Here at PokeMon App, you can see all available pokemon and adopt them. The app contains many features, such as the adoption of pokemon. You can create a collection of pokemon, which will be stored separately on your profile.</h5>
            <NavLink to="/pokedetails">
              <button>Adopt</button>
            </NavLink>
          </div>
        </section>
        <video autoPlay loop muted={shouldMute} id="myVideo">
          <source src="./videoplayback.mp4" type="video/mp4" />
        </video>
      </div>
    </Layout>
  );
}

export default Home;
