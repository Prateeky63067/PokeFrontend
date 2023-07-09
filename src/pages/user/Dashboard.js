// import React from 'react'
// import Layout from '../../components/Layout/Layout'
// import AdminMenu from '../../components/Layout/AdminMenu'
// import { useAuth } from '../../Context/auth'
// import UserMenu from '../../components/Layout/UserMenu'
// const Dashboard = () => {
//   const[auth]=useAuth();
//   return (
//    <Layout>
//     <div classNameName='container-fluid m-3 p-3 '>
//       <div classNameName='row'>
//          <div classNameName='col-md-3'>
//           <UserMenu/>
//          </div>
//          <div classNameName='col-md-9'>
//           <div classNameName='card w-75 p-3'>
//           <h3>User Name:{auth?.user?.name}</h3>
//           <h3>User Email:{auth?.user?.email}</h3>
//           <h3>User Phone:{auth?.user?.phone}</h3>
//           </div>
//          </div>
//       </div>
//     </div>
//    </Layout>
//   )
// }
// export default Dashboard

// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import { useAuth } from "../../Context/auth";
// import UserMenu from "../../components/Layout/UserMenu";
// import "./dash.css"
// import { NavLink,Link } from 'react-router-dom'
// const Dashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout>
//       <div classNameName="outbox">
//         <div className="carddash">
//           <div className="card_background_img"></div>
//           <div className="card_profile_img"></div>
//           <div className="userDEt">
//             <h3>{auth?.user?.name}</h3>
//             <p>{auth?.user?.email}</p>
//             <p>{auth?.user?.phone}</p>
//           </div>
//           <div className="card_count">
//             <div className="count">
//               <div className="fans">
//                 <h3>2.4M</h3>
//                 <p>Fans</p>
//               </div>
//               <div className="following">
//                 <h3>202</h3>
//                 <p>Followings</p>
//               </div>
//               <div className="post">
//                 <h3>552</h3>
//                 <p>Posts</p>
//               </div>
//             </div>

//             <div className="btn">My Pokemon</div>

//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../Context/auth";
import UserMenu from "../../components/Layout/UserMenu";
import "./dash.css";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [auth] = useAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = async () => {
    try {
      setIsPopupOpen(true);
      const response = await axios.get(
        `https://pokemonapp-fwmi.onrender.com/api/v1/poke/pokedetail?email=${auth?.user?.email}`
      );
      setUserData(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error:", error.response.data);
      setUserData([]);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Layout>
      <div className="outbox">
        <div className="carddash">
          <div className="card_background_img"></div>
          <div className="card_profile_img"></div>
          <div className="userDEt">
            <h3>{auth?.user?.name}</h3>
            <p>{auth?.user?.email}</p>
            <p>{auth?.user?.phone}</p>
          </div>
          <div className="card_count">
            <div className="count">
              <div className="fans">
                <h3>2.4M</h3>
                <p>Fans</p>
              </div>
              <div className="following">
                <h3>202</h3>
                <p>Followings</p>
              </div>
              <div className="post">
                <h3>552</h3>
                <p>Posts</p>
              </div>
            </div>

            <div className="btn" onClick={openPopup}>
              My Pokemon
            </div>

            {isPopupOpen && (
              <div className="popup">
                <div className="popup_content">
                  <span className="close" onClick={closePopup}>
                    &times;
                  </span>
                  <h1>My Pokemon Cards</h1>
                  
                    
                    {userData.length > 0 ? (
                      <div className="mainClass">
                        {userData.map((user, index) => (
                          <div className="mypokocard" key={index}>
                            <img className="imginfo" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${user.id}.svg`} alt="" />
                            
                            {/* <img src="/dummy.png" alt="" /> */}
                            <p className="pname">{user.PokeName}</p>
                            <p className="restinfo">health:{user.health}</p>
                            <p className="restinfo">attack:{user.attack}</p>
                            <p className="restinfo">defense:{user.defense}</p>
                            <p className="restinfo">special_attack:{user.special_attack}</p>
                            <p className="restinfo">special_defense:{user.special_defense}</p>
                            <p className="restinfo">speed:{user.speed}</p>
                            {/* Render other data fields as needed */}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No Pokemon Adopted by you</p>
                    )}
                  </div>
                </div>
              
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
