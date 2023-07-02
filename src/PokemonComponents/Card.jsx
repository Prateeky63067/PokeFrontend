// import React from "react";
// import { NavLink,Link } from 'react-router-dom'
// const Card = ({ pokemon, loading,infoPokemon}) => {
//    // console.log(pokemon);
//     return (
//         <>
//         {
//             loading ? <h1>Loading...</h1> :
//                 pokemon.map((item) => {
//                     return (
//                         <>
                        
//                             <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
//                                 <h2 className="itemhead">{item.id}</h2>
//                                 {/* <img src={item.sprites.other.front_default.} alt="" /> */}
//                                <img className="imginfo" src="dummy.png"/>
//                                 <h2 className="itemhead">{item.name}</h2>
                                
//                                 <button className="btn" role="button">View Details</button>
//                             </div>
//                         </>
//                     )
//                 })
//         }

//         </>
//     )
// }
// export default Card;


import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const Card = ({ pokemon, loading, infoPokemon }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPokemon = pokemon.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    

   
      <input  className="inputfield"
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
      />
       

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        filteredPokemon.map((item) => {
          return (
            <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
              <h2 className="itemhead"></h2>
              {/* <img className="imginfo" src="dummy.png" alt="" /> */}
              <img src={item.sprites.front_default} alt="" />
              <h2 className="itemhead">{item.name}</h2>
              <button className="btn" role="button">View Details</button>
            </div>
          )
        })
      )}
    </>
  );
};

export default Card;
