

// import React from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const Main = () => {
//   const [pokeData, setPokeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//   const [nextUrl, setNextUrl] = useState();
//   const [prevUrl, setPrevUrl] = useState();
//   const [pokeDex, setPokeDex] = useState();
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch('/api/v1/poke/pokedetails/all')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((err) => {
//         console.error('Error retrieving data', err);
//       });
//   }, []);
  
//    const[filterdata,setfilterdata]=useState([]);
//   const pokeFun = async () => {
//     setLoading(true);
//     const res = await axios.get(url);
//     setNextUrl(res.data.next);
//     setPrevUrl(res.data.previous);
//     getPokemon(res.data.results);
//     setLoading(false);
//   }

//   const getPokemon = async (res) => {
//     res.map(async (item) => {
//       const result = await axios.get(item.url);
//       setPokeData((state) => {
//         state = [...state, result.data];
//         state.sort((a, b) => (a.id > b.id ? 1 : -1));
//         return state;
//       });
//     });
//   };


  
//   useEffect(() => {
//     pokeFun();
//   }, [url]);

//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setSelectedPokemon(null);
//   };
  
  

//   useEffect(() => {
//     setfilterdata(pokeData.filter((item) => !data.find((p) => p.id === item.id)));
//   }, [pokeData, data]);
  
//     console.log(pokeData)
//   return (
//     <>
//       <div className="container">
//         <h1 className="heading">Available Pokemon</h1>
//         <div className="left-content">
//           <Card
//             pokemon={filterdata}
//             loading={loading}
//             infoPokemon={(poke) => {
//               setSelectedPokemon(poke);
//               setIsPopupOpen(true);
//             }}
//           />
//           <div className="btn-group">
//             {prevUrl && (
//               <button
//                 onClick={() => {
//                   setPokeData([]);
//                   setUrl(prevUrl);
//                 }}
//               >
//                 Previous
//               </button>
//             )}
//             {nextUrl && (
//               <button
//                 onClick={() => {
//                   setPokeData([]);
//                   setUrl(nextUrl);
//                 }}
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="right-content">
//           {isPopupOpen && (
//             <div className="popup1">
//               <button className="close-button" onClick={closePopup}>
//                 X
//               </button>
//               <Pokeinfo data={selectedPokemon} />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;


import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://pokemonapp-fwmi.onrender.com/api/v1/poke/pokedetails/all')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error('Error retrieving data', err);
      });
  }, []);
  
   const[filterdata,setfilterdata]=useState([]);
  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };


  
  useEffect(() => {
    pokeFun();
  }, [url]);

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPokemon(null);
  };
  
  

  useEffect(() => {
    setfilterdata(pokeData.filter((item) => !data.find((p) => p.id === item.id)));
  }, [pokeData, data]);
  
    console.log(pokeData)
  return (
    <>
      <div className="container2">
        <h1 className="heading">Available Pokemon</h1>
        <div className="left-content">
          <Card
            pokemon={filterdata}
            loading={loading}
            infoPokemon={(poke) => {
              setSelectedPokemon(poke);
              setIsPopupOpen(true);
            }}
          />
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="right-content">
          {isPopupOpen && (
            <div className="popup1">
              <button className="close-button" onClick={closePopup}>
                X
              </button>
              <Pokeinfo data={selectedPokemon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;



