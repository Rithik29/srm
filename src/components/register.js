import React from "react";
import './register.css'
import { useState } from "react";
import call from '../assests/call.png';
import mail from '../assests/mail.png';
import loc from '../assests/loc.png';
import linkd from '../assests/link.png';
import insta from '../assests/insta.png';
import twit from '../assests/twit.png';
import NavbarNew from "./Navbarnew";
import axios from 'axios';

function Register() {

    const[Name, setname]=useState("")
    const[Email, setemail]=useState("")
    const[Number, setnum]=useState("")
    const[Password, setpass]=useState("")
    const[cpass, setcpass]=useState("")
    var temp=''


    const handlesubmit = async(e) => {
       

        e.preventDefault()
        if(Password!=cpass)
        {
            alert("password doesnt matches")
            return;
        }
        const user = {Name, Email, Number, Password}
        alert(user.Email)
        try{
            const resp=await axios.post('/reg', user)
            // localStorage.setItem('token', resp.data.token);
            localStorage.setItem('id', resp.data.Email);
            temp=resp.data
            console.log(temp)
            alert(typeof temp)
        }catch (error) {
            console.error(error);
        }

        console.log(temp)
        
        // .then(response => console.log(response.data))
        // .catch(error => console.log(error));

    }

    return(
        <>
            <div className="bodyreg">
               
            <div className="signupbg">
               <NavbarNew/>
            <div className="boxreg">
                <div className="headreg">
                    <h2>Sign Up</h2>
                    {/* <p> Our geeks are in full swing releregntlessly coading our sleek new app to bring it out to you asps</p> */}
                </div>

                <div className="formreg">
                    <form onSubmit={handlesubmit}>
                        <div className="elereg">
                            <label className="labelreg">Name</label><br></br>
                            <input type='text'
                            className="input-boxreg"
                            name="name"
                            value={Name}
                            placeholder='Your Name' 
                            onChange={(e) => setname(e.target.value)}/> <br></br>

                        </div>
                        <div className="elereg">

                            <label className="labelreg">Email Address</label><br></br>
                            <input type='email'
                            className="input-boxreg"
                            value={Email}
                            placeholder="Email Address" 
                            onChange={(e) => setemail(e.target.value)}/><br></br>
                        </div>
                        <div className="elereg">

                            <label className="labelreg">Contact Number</label><br></br>
                            <input type='email'
                            className="input-boxreg"
                            value={Number}
                            placeholder="Contact number" 
                            onChange={(e) => setnum(e.target.value)}/><br></br>
                        </div>

                        <div className="elereg">

                            <label className="labelreg">Password</label><br></br>
                            <input type='email'
                            className="input-boxreg"
                            value={Password}
                            placeholder="Password" 
                            onChange={(e) => setpass(e.target.value)}/><br></br>
                        </div>

                        <div className="elereg">

                            <label className="labelreg">Confrim Password</label><br></br>
                            <input type='email'
                            className="input-boxreg"
                            value={cpass}
                            placeholder="Confirm password" 
                            onChange={(e) => setcpass(e.target.value)}/><br></br>
                        </div>

                        {/* <div className="elereg">
                            <label className="label">Message</label><br></br>
                            <textarea type='textarea'
                            className="input-area"
                            value={text}
                            placeholder='Type your Message Here' 
                            onChange={(e) => settext(e.target.value)}/><br></br>
                        </div> */}

                        <div>
                            <button type='submit' className="btnreg" onClick={handlesubmit}>Register</button>
                        </div>

                       
                    </form>

                </div>

                {/* <div className="con">
                    <img src={call} alt='' />
                    <p>+(123) 456 7890</p><br></br>
        
                    <img src={mail} alt='' />
                    <p>xyz@gmail.com</p><br></br>
                    <img src={loc} alt='' />
                    <p>NSUT Dwarka-Delhi</p>
                </div> */}

                {/* <div className="socialreg">
                    <a href="#"><img id="signuplinkedreg" src={linkd} alt='' /></a>
                    <a href="#"><img id="signupinstareg" src={insta} alt='' /></a>
                    <a href="#"><img id="signuptwitreg" src={twit} alt='' /></a>
                </div> */}


            </div>
            </div>
            </div>
        </>
    )


    
}
export default  Register