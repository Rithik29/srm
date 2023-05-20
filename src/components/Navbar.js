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
// import { Cursor } from "mongoose";
// import 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
//import PropPass from '../components/PropPass'

const Navbar = () => {
  const navigate=useNavigate()

  localStorage.setItem(id)

  const[modal,setmodal]=useState(false)
  const[id,setid]=useState()
  const[pass,setpass]=useState()
  const[sign,setsign]=useState(false)
  const[user, setuser]=useState("")
  const[check, setcheck]=useState(false)
  const[goog, setgoog]=useState(false)
  const auth=getAuth()
  const login =localStorage.setItem('id', 'abc@gamil.com')

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
        localStorage.setItem('id', resp.data);
        const temp = resp.data
        console.log(temp)
        window.location.reload()
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
      localStorage.clear()
      window.location.reload()
    }

  }
  const handleScroll =() => {
    setmodal(false)
  }
  
  const showRep = () => {
    if(login)
    {
      navigate('/report')
    }
    else{
      navigate('/register')
    }
    
  }

  const setdev = () => {
    const divi = "Mi band 4"
    const maci = "E5:31:4B:00:4B:CF"
    localStorage.setItem('dev', divi )
    localStorage.setItem('mac', maci)
  }

  const Reg = () =>{
    navigate('/register')
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
              <p onClick={Reg}>don't have an account?<a href="#">register now</a></p>
              <input type='submit' 
              className='btn'
              />
              <FcGoogle className='ggl' onClick={handleGoogle} />
              <AiFillFacebook className='face' />
        
              
            </form>
          </div>  
        
        : ""}
        {/* <PropPass state={sign} /> */}





      <div className="navbar-old">
        <div className="group-parent1-old">
          <button className="rectangle-parent10">
            <div className="group-child10" />
            <div className="sign-up-nav" onClick={sign ? logout:toggle}>{sign ? logo : logi}</div>
          </button>
          <div className="home-nav" onClick={ () => {navigate(-1)}}>HOME</div>
          <div className="report-nav" onClick={showRep} style={{cursor : 'pointer'}}>REPORT</div>

          <div  className="about-us2-old" onClick={setdev} style={{cursor : 'pointer'}} >DEVICE</div>
          {/* {devices.length > 0 && (
            <div className="popup">
              <h2>Nearby Devices</h2>
              <ul>
                {devices.map(device => (
                  <li key={device.id}>{device.name}</li>
                ))}
              </ul>
            </div>
          )} */}
          

        
          
          
          <button className="contact-nav">Contact-Us</button>
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