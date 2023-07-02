import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://pokemonapp-fwmi.onrender.com/api/v1/auth/forgot-password", {
         
          email,
          answer,
          newpassword,
        });
        // && res.data.success
        if (res && res.data.success ) {
          toast.success(res.data && res.data.message);
          
         
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        // console.error(error.response.data);
        toast.error("Something went wrong bro");
      }
    };
  
  return (
    <Layout title="Forgot Password Ecommerce-App">
    <div className="register">
      <div className="container containerReg">
        <div className="title">Reset Password</div>
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
              <span className="datails">Answer</span>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                placeholder="Enter your favourite Sport"
                required
              />
            </div>
            <div className="input_pox">
              <span className="datails">New Password</span>
              <input
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                placeholder="enter your New Password"
                required
              />
            </div>
            

           
          </div>

         
          <div className="button">
            <input type="submit" defaultValue="Login" />
          </div>
        </form>
      </div>
    </div>
  </Layout>
  )
}

export default ForgotPassword