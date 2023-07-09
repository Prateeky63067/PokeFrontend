import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://pokemonapp-fwmi.onrender.com/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      // && res.data.success
      if (res ) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      console.error(error.response.data);
      toast.error("Something went wrong");
    }
  };

  // ==================================

  // const handleSubmit =  async(e) => {
  //   e.preventDefault();
 
  //   try {
  //     const res=
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('something went wrong')

  //   }
  // }


  // ==================================
  return (
    <Layout title="Register Ecommerce-App">
      <div className="register">
        <div className="container containerReg">
          <div className="title">Registation</div>
          <form onSubmit={handleSubmit}>
            <div className="user_details">
              <div className="input_pox">
                <span className="datails">Full Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="enter your name"
                  required
                />
              </div>

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
              <div className="input_pox">
                <span className="datails">Phone Number</span>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  placeholder="enter your Phone"
                  required
                />
              </div>

              <div className="input_pox">
                <span className="datails">Address</span>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Confirm your Password"
                  required
                />
              </div>
              <div className="input_pox">
                <span className="datails">Answer</span>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="What is your favourite Sports?"
                  required
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

