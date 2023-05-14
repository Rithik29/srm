import "./Navbarnew.css";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { useState } from "react";
import { RiCloseLine} from 'react-icons/ri';
// import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../pages/FrameComponent";
//import PropPass from '../components/PropPass'

const NavbarNew = () => {
   const navigate=useNavigate()

  const[modal,setmodal]=useState(false)
  const[id,setid]=useState()
  const[pass,setpass]=useState()
  const[sign,setsign]=useState(false)
  const auth=getAuth()

  const Back = () => {
    navigate('/')
  }

  
  return (

<>
      <div className="navbarnew">
        <div className="group-parent1new">
          
          {/* <div className="home" onClick={ () => {navigate(-1)}}>HOME</div>
          <div className="report">REPORT</div> */}

          {/* <div className="about-us2">{`ABOUT US `}</div> */}
           
          <button className="backbuttonnew" onClick={Back} >Home</button>
        </div>
        <img
          className="find-your-balance-1-1new"
          alt=""
          src="../find-your-balance1-1@2x.png"
        />
      </div>
    </>
  );
};

export default NavbarNew;