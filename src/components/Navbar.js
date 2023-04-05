import "./Navbar.css";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { useState } from "react";
import { RiCloseLine} from 'react-icons/ri';
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
//import PropPass from '../components/PropPass'

const Navbar = () => {
  const navigate=useNavigate()

  const[modal,setmodal]=useState(false)
  const[id,setid]=useState()
  const[pass,setpass]=useState()
  const[sign,setsign]=useState(false)
  const[user, setuser]=useState("")
  const[check, setcheck]=useState(false)
  const[goog, setgoog]=useState(false)
  const auth=getAuth()
  const login =localStorage.getItem('id')

  useEffect(() => {
    if(login)
    {
      setcheck(true)
      setuser(login)
      setsign(true)
    }
  })

  const handleSubmit = async(e) => {
       
    e.preventDefault()
    const user = {id, pass}
    //alert(user.Email)
    try{
        const resp=await axios.post('/login', user)
        // localStorage.setItem('token', resp.data.token);
        console.log(resp.data.id1)
        localStorage.setItem('id', resp.data);
        const temp = resp.data
        console.log(resp.data.id1)
        console.log(temp)
        window.location.reload()
        const sh=localStorage.getItem('id')

    }catch (error) {
        console.error(error);
    }

    
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error));

  }

  const logi="Sign-In"
  const logo="Sign-Out"

  const toggle=() => {
    setmodal(!modal)
  }
  const signr = () =>
  {
    return sign
  }

  const logout=() => {
    if(goog)
    {
      const auth = getAuth();
      signOut(auth).then(() => {
        setsign(false)
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    else{
      console.log(localStorage.getItem('id'))
      localStorage.clear()
      window.location.reload()
    }

  }
  const handleScroll =() => {
    setmodal(false)
  }
  
  const nm=''
  const con='Contact-Us'
  const handleGoogle=() => {
    //alert("jhh")
    const provider = new GoogleAuthProvider();
    //const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert(user.displayName)
        setgoog(true)
        //nm=user.displayName
        setmodal(false)
        setsign(true)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        //alert("err")
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  window.addEventListener('scroll', handleScroll);

  return (


  <>

      {modal ? 
        <div className='login-form' onScroll={() => {
          setmodal(false)
        }}>
          <div className='overlay'></div>
            <form onSubmit={handleSubmit}>

              <div className='topsign'><button onClick={toggle} ><RiCloseLine/></button></div>
              <h3>Log in</h3>  
  
              <input type='email'
              className='box'
              value={id}
              placeholder='Userid'
              onChange={(e) => setid(e.target.value)}/>
              <input type="password"
              placeholder="password"
              className='box'
              value={pass}
              onChange={(e) => setpass(e.target.value)}/>
              <p>forgot password<a href="#">click here</a></p>
              <p>don't have an account?<a href="#">register now</a></p>
              <input type='submit' 
              className='btn'
              />
              <FcGoogle className='ggl' onClick={handleGoogle} />
              <AiFillFacebook className='face' />
        
              
            </form>
          </div>  
        
        : ""}
        {/* <PropPass state={sign} /> */}





      <div className="navbar">
        <div className="group-parent1">
          <button className="rectangle-parent3">
            <div className="group-child10" />
            <div className="sign-up" onClick={sign ? logout:toggle}>{sign ? logo : logi}</div>
          </button>
          <div className="home" onClick={ () => {navigate(-1)}}>HOME</div>
          <div className="report">REPORT</div>

          <div className="about-us2">{`ABOUT US `}</div>
          <button className="contact">Contact-Us</button>
        </div>
        <img
          className="find-your-balance-1-1"
          alt=""
          src="../find-your-balance1-1@2x.png"
        />
      </div>
    </>
  );
};

export default Navbar;