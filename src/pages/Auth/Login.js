import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate,useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/auth";
const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[auth,setAuth]=useAuth();
  const navigate = useNavigate();
  const location=useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://pokemonapp-fwmi.onrender.com/api/v1/auth/login", {
       
        email,
        password,
      
      });
      // && res.data.success
      if (res && res.data.success ) {
        toast.success(res.data && res.data.message);
        setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
        })
        localStorage.setItem("auth",JSON.stringify(res.data));
        navigate(location.state||"/pokedetails");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      console.error(error.response.data);
      toast.error("Something went wrong");
    }
  };

 
  return (
    <Layout title="Register Ecommerce-App">
      <div className="register">
        <div className="container containerReg">
          <div className="title">Login</div>
          <form onSubmit={handleSubmit}>
            <div className="user_details">
              <div className="input_pox">
                <span className="datails">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="enter your Email"
                  required
                />
              </div>
              <div className="input_pox">
                <span className="datails">Password</span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="enter your Password"
                  required
                />
              </div>
              

             
            </div>

            <div className="button" onClick={()=>{navigate('/forgot-password')}}>
              <input type="button" defaultValue="Forget Password" />
            </div>
            <div className="button">
              <input type="submit" defaultValue="Login" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;


