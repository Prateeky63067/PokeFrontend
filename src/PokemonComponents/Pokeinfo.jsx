// import React, { useState,useEffect } from "react";
// import { NavLink,Link } from 'react-router-dom'
// import { toast } from "react-toastify";
// import { useAuth } from '../Context/auth'
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const Pokeinfo = ({ data }) => {
//      if(data)
//      console.log(data.name)
//     const [auth,setAuth]=useAuth();
//     const [PokeName, setPokeName] = useState("prateek");
//     const [health, sethealth] = useState(1);
//     const [attack, setattack] = useState(2);
//     const [defense, setdefense] = useState(3);
//     const [special_attack, setspecial_attack] = useState(4);
//     const [special_defense, setspecial_defense] = useState(5);
//     const [speed, setspeed] = useState(6);
//     const navigate = useNavigate();
   
//    const  message=async()=>{
//     try {
        
//         const res = await axios.post("/api/v1/poke/pokedetails", {
//           PokeName,
//           health,
//           attack,
//           defense,
//           special_attack,
//           special_defense,
//           speed,
//         });
//         // && res.data.success
//         if (res) {
//           toast.success(res.data && res.data.message);
//         //   navigate("/login");
//         } else {
//           toast.error(res.data.message);
//         }
//       } catch (error) {
//         // console.log(error);
//         console.error(error.response.data);
//         toast.error("Something went wrong");
//       }
       
//    }
   
//     return (
//         <>
//         {
//             (!data) ? "" : (
//                 <>
//                 <div className="infocard">
                    
                    
//                     <h1 className="itemhead">{data.name}</h1>
//                     {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" /> */}
//                     <img className="imginfo" src='dummy.png' alt="" />
//                     <div className="abilities">
//                         {
//                             data.abilities.map(poke=>{
//                                 return(
//                                     <>
//                                      <div className="groupab">
//                                         <h2 className="infoability" >{poke.ability.name}</h2>
//                                     </div>
//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
                    
//                     <div className="base-stat">
//                         {
//                             data.stats.map(poke=>{
//                                 return(
//                                     <>
                                   
//                                         <h3 className="itemhead infoability2">{poke.stat.name}:{poke.base_stat}</h3>
//                                     </>
//                                 )
//                             })
                              

//                         }
//                     </div>
//                    {/* {console.log(data.stats[0].poke.stat.name)} */}
//                     {
                        
//                         !auth.user ? (<>
//                             <NavLink to="/dashboard/user" >
//                     <button className="btnAdopt" role="button">Adopt</button>
//                     </NavLink>
//                     </>):(<>
//                         <NavLink to="/pokedetails"  onClick={message} >
//                     <button className="btnAdopt" role="button">Adopt</button>
//                     </NavLink>
//                     </>)
//                     }
                    
//                     </div>
//                 {/* {console.log(data.name)} */}
                
//                 </>
//             )
//         }
      

//         </>
//     )
// }
// export default Pokeinfo





import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { useAuth } from '../Context/auth'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Pokeinfo = ({ data }) => {
  
  const [auth] = useAuth();
  const [id, setId] = useState(0);
  const [email, setEmail] = useState("");
  const [PokeName, setPokeName] = useState("");
  const [health, sethealth] = useState(0);
  const [attack, setattack] = useState(0);
  const [defense, setdefense] = useState(0);
  const [special_attack, setspecial_attack] = useState(0);
  const [special_defense, setspecial_defense] = useState(0);
  const [speed, setspeed] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setId(data.id)
      setEmail(auth?.user?.email);
      setPokeName(data.name);
      sethealth(data.stats[0].base_stat+1);
      // Set other state values based on the data object
      setattack(data.stats[1].base_stat);
      setdefense(data.stats[2].base_stat);
      setspecial_attack(data.stats[3].base_stat);
      setspecial_defense(data.stats[4].base_stat);
      setspeed(data.stats[5].base_stat);
    }
  }, [data]);

  
  const message = async () => {
    try {
      const res = await axios.post("/api/v1/poke/pokedetails", {
        id,
        email,
        PokeName,
        health,
        attack,
        defense,
        special_attack,
        special_defense,
        speed,
      });

      if (res.data && res.data.success) {
        toast.success(res.data.message);
        // navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error.response.data);
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      {!data ? "" : (
        <>
          <div className="infocard">
          <div>
            <h1 className="itemhead">{data.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
            {/* <img className="imginfo" src="dummy.png" alt="" /> */}
            <div className="abilities">
              {data.abilities.map(poke => (
                <div className="groupab" key={poke.ability.name}>
                  <h2 className="infoability">{poke.ability.name}</h2>
                </div>
              ))}
            </div>
            </div>
            <div>
            <div className="base-stat">
              {data.stats.map(poke => (
                <h3 className="itemhead infoability2" key={poke.stat.name}>
                  {poke.stat.name}: {poke.base_stat}
                </h3>
              ))}
            </div>
            {!auth.user ? (
              <NavLink to="/dashboard/user">
                <button className="btnAdopt" role="button">Adopt</button>
              </NavLink>
            ) : (
              <NavLink to="/pokedetails" onClick={message}>
                <button className="btnAdopt" role="button">Adopt</button>
              </NavLink>
            )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Pokeinfo;
