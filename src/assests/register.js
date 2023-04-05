import React from "react";
import './register.css';
import { useState } from "react";
import call from '../../assests/call.png';
import mail from '../../assests/mail.png';
import loc from '../../assests/loc.png';
import linkd from '../../assests/link.png';
import insta from '../../assests/insta.png';
import twit from '../../assests/twit.png';
import axios from 'axios';
//import signupimg from './../../assests/signupimg'

function Register() {

    const[Name, setname]=useState("")
    const[Email, setemail]=useState("")
    const[Number, setnum]=useState("")
    const[Password, setpass]=useState("")
    const[cpass, setcpass]=useState("")
    var temp=''


    const handlesubmit = (e) => {
       

        e.preventDefault()
        alert(temp)
        alert('hello')
        if(Password!=cpass)
        {
            alert("password doesnt matches")
            return;
        }
        const user = {Name, Email, Number, Password}
        try{
            const resp=axios.post('/register', user)
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('id', resp.data.id);
            temp=localStorage.getItem('token')
            console.log(temp)
            alert(temp)
        }catch (error) {
            console.error(error);
        }
        alert(temp)
        console.log(temp)
        
        // .then(response => console.log(response.data))
        // .catch(error => console.log(error));

    }


    return(
        <>
            <div className="body">
            <div className="signupbg">
            <div className="box">
                <div className="head">
                    <h2>Sign Up</h2>
                    {/* <p> Our geeks are in full swing relentlessly coading our sleek new app to bring it out to you asps</p> */}
                </div>

                <div className="form">
                    <form onSubmit={handlesubmit}>
                        <div className="ele">
                            <label className="label">Name</label><br></br>
                            <input type='text'
                            className="input-box"
                            name="name"
                            value={Name}
                            placeholder='Your Name' 
                            onChange={(e) => setname(e.target.value)}/> <br></br>

                        </div>
                        <div className="ele">

                            <label className="label">Email Address</label><br></br>
                            <input type='email'
                            className="input-box"
                            value={Email}
                            placeholder="Email Address" 
                            onChange={(e) => setemail(e.target.value)}/><br></br>
                        </div>
                        <div className="ele">

                            <label className="label">Contact Number</label><br></br>
                            <input type='email'
                            className="input-box"
                            value={Number}
                            placeholder="Contact number" 
                            onChange={(e) => setnum(e.target.value)}/><br></br>
                        </div>

                        <div className="ele">

                            <label className="label">Password</label><br></br>
                            <input type='email'
                            className="input-box"
                            value={Password}
                            placeholder="Password" 
                            onChange={(e) => setpass(e.target.value)}/><br></br>
                        </div>

                        <div className="ele">

                            <label className="label">Confrim Password</label><br></br>
                            <input type='email'
                            className="input-box"
                            value={cpass}
                            placeholder="Confirm password" 
                            onChange={(e) => setcpass(e.target.value)}/><br></br>
                        </div>

                        {/* <div className="ele">
                            <label className="label">Message</label><br></br>
                            <textarea type='textarea'
                            className="input-area"
                            value={text}
                            placeholder='Type your Message Here' 
                            onChange={(e) => settext(e.target.value)}/><br></br>
                        </div> */}

                        <div>
                            <button type='submit' className="btn" onClick={handlesubmit}>Send Message</button>
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

                <div className="social">
                    <a href="#"><img id="signuplinked" src={linkd} alt='' /></a>
                    <a href="#"><img id="signupinsta" src={insta} alt='' /></a>
                    <a href="#"><img id="signuptwit" src={twit} alt='' /></a>
                </div>


            </div>
            </div>
            </div>
        </>
    )
}
export default  Register;