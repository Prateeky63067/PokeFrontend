// import React, { useState } from "react";
// import { NavLink, Link } from 'react-router-dom';

// const Card = ({ pokemon, loading, infoPokemon }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredPokemon = pokemon.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>

//       <input  className="inputfield"
//         type="text"
//         placeholder="Search by name"
//         value={searchQuery}
//         onChange={handleSearch}
//       />

//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         filteredPokemon.map((item) => {
//           return (
//             <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
//               {/* <img className="imginfo" src="dummy.png" alt="" /> */}
//               <img src={item.sprites.front_default} alt="" />
//               <h2 className="itemhead">{item.name}</h2>
//               <button className="btn" role="button">View Details</button>
//             </div>
//           )
//         })
//       )}
//     </>
//   );
// };

// export default Card;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css"
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
      <input
        className="inputfield"
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
            <div className="cardmain" key={item.id} onClick={() => infoPokemon(item)}>
              <div className="content">
                <div className="imgBx">
                
                  {/* <img src="dummy.png" /> */}
                  <img className="imginfo" src={item.sprites.front_default} alt="image not found" />
                </div>
                <div className="contentBx">
                  <h3>
                  {item.name}
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                <button className="btnlast" role="button">View Details</button>
                </li>
                
              </ul>
            </div>
          );
        })
       
      )}
     
    </>
  );
};

export default Card;
