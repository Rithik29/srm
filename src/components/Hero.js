import "./Hero.css";
import { useState } from "react";
import { RiCloseLine} from 'react-icons/ri';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Test from "./Suicide";
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Register from "./register";
const Hero = () => {
  const navigate=useNavigate()

  const[modal, setmodal]=useState(false)
  const[id, setid]=useState("")
  const[pass, setpass]=useState()
  const[show, setshow]=useState(false)
  const[dir, setdir]=useState(false)
  const[log, setlog]=useState(false)
  const login =localStorage.getItem('id')
  const start= 'Get Started'
  const box = 'START ASSESSMENT'


  const toggle=() => {
    setmodal(!modal)
  }
  const handleScroll =() => {
    setmodal(false)
  }

  useEffect(() => {
    if(login)
    {
      setlog(true)
    }
  })
  const handleBox = () =>
  {
  //   alert("hello")
    if(log)
    {
      toggle()
    }
    else
    {
      navigate('/register')
    }
  }

  

  window.addEventListener('scroll', handleScroll);

  const handleSubmit = async(e) =>{  
    e.preventDefault()
    localStorage.setItem("text", id)
    navigate('/load')
  //   try {
  //     const mail = localStorage.getItem('id')
  //     const send = {mail, id}
  //     const response = await axios.post('/model', send)
  //     const data  = response.data
  //     // localStorage.setItem('id', id)
  //     // //console.log(typeof token);
      
  //     //window.location.reload()
  //     //alert(data)
  //     console.log(typeof data);
  //     if(data=='0')
  //     {
  //       navigate('/suicide')
  //     }
  //     if(data=='1' || data=='2')
  //     {
  //       navigate('/sad')
  //     }
  //     if(data=='7')
  //     {
  //       navigate('/anxiety')
  //     }    
  //     else
  //     {
  //       navigate('/happy')
  //     }      
        
      
  // }catch (error) {
  //     console.error(error.response);
  // }

    


  //   alert("entered")
  //   e.preventDefault( )
  //   fetch("/result", {
  //     method:"POST",
  //     cache: "no-cache",
  //     headers:{
  //         "content_type":"application/json",
  //         'Accept':'application/json'
  //     },
  //     body:JSON.stringify(id)
  //     }
  //     ).then(res => {
  //         if(res.ok){
  //           //a//lert("done")
  //           setshow(true)


  //           return res.json()

              

  //         }
  //         else{
  //             alert("stop")
  //             alert(res.errorMessage)
  //         }
  //       //alert("settingh")
  //       setshow(true)
  //   })
  // }
  //   // .then(jsonResponse=> {
  //   // //this.setState({name: json[0]})
  //   // }).catch((err)=>{
  //   //   alert("catchy")
  //   // })

  // if(show==true)
  // {
  //  fetch("/nsut").then((res) =>
  //   res.json().then((data) => {
  //       //alert("in the hole")
  //       //alert(typeof data)
  //       const obj=JSON.stringify(data)
  //       obj.replace('[',"")
  //       obj.replace(']',"")
  //       obj.replace("'", "")
      
  //       //alert(obj)
  //       //alert(resu)
  //       setpass(obj);
  //       console.log(pass)
  //       alert(obj)
  //       //swap()
  //       if(obj=='["Negative"]')
  //       {
  //         navigate('./anxiety')
  //       }
  //       else if(obj=='["Suicide"]')
  //       {
  //         navigate('./suicide')

  //       }
  //       else
  //       {
  //         navigate('./happy')
  //       }

  //       // const navigate=useNavigate()
  //       // navigate('./anxiety')
        
  //       //navigate('/'+pass);
  //       // isset(true)
  //   }))
  //   setshow(false)
  // }
  // const swap =() => {
  //   const navigate=useNavigate()
  //   navigate('./anxiety')
  // }
  }

 
  //window.addEventListener("scroll", setmodal(false))

  return (
    <>

      {modal ? 
        <div className='login-form1' id='login-form' onScroll={() => {
          setmodal(false)
        }}>
          <div className='overlay'></div>
          <form onSubmit={handleSubmit} >

            <div className='topsign'><button onClick={ toggle} ><RiCloseLine/></button></div>
            <h3>Write Your Heart Down</h3>  

            <textarea
            className='box'
            value={id}
            placeholder='Start Writing......'
            rows={10}
            cols={500}
            onChange={(e) => setid(e.target.value)}/>
            
            <input type='submit' 
            className='btn'
            onClick={handleSubmit}
            />
      
            
          </form>
        </div>  
        
      :""}

      




      <div className="hero">
        <img className="hero-child" alt="" src="../group-63@2x.png" />
        <div className="find-your-balance-parent">
          <b className="find-your-balance">
            <p className="find">FIND</p>
            <p className="find">YOUR</p>
            <p className="balance">BALANCE</p>
          </b>
          <div className="track-your-well-container">
            <p className="find">{`Track your well being and mental health just by writing your everyday `}</p>
            <p className="balance">{`thoughts, experiences `}</p>
          </div>
          <button className="group-button">
            <button className="group-child9" />
            <b className="start-assesment" onClick={handleBox}>{log ? box : start}</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero
