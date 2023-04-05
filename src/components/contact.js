import React from "react";
import './contact.css'
import { useState } from "react";
import call from '../assests/call.png';
import mail from '../assests/mail.png';
import loc from '../assests/loc.png';
import linkd from '../assests/link.png';
import insta from '../assests/insta.png';
import twit from '../assests/twit.png';

function Contact() {

    const[name, setname]=useState("")
    const[email, setemail]=useState("")
    const[text, settext]=useState("")

    return(
        <>
            <div className="box-con">
                <div className="head">
                    <h2>Contact us</h2>
                    <p> Our geeks are in full swing relentlessly coading our sleek new app to bring it out to you asps</p>
                </div>

                <div className="form">
                    <form>
                        <div className="ele">
                            <label className="label">Name</label><br></br>
                            <input type='text'
                            className="input-box"
                            name="name"
                            value={name}
                            placeholder='Your Name' 
                            onChange={(e) => setname(e.target.value)}/><br></br>

                        </div>
                        <div className="ele">

                            <label className="label">Email Address</label><br></br>
                            <input type='email'
                            className="input-box"
                            value={email}
                            placeholder="Email Address" 
                            onChange={(e) => setemail(e.target.value)}/><br></br>
                        </div>
                        <div className="ele">

                            <label className="label">Message</label><br></br>
                            <textarea type='textarea'
                            className="input-area"
                            value={text}
                            placeholder='Type your Message Here' 
                            onChange={(e) => settext(e.target.value)}/><br></br>
                        </div>
                        <div>
                            <button className="btn">Send Message</button>
                        </div>

                       
                    </form>

                </div>

                <div className="con">
                    <img src={call} alt='' />
                    <p>+(123) 456 7890</p><br></br>
        
                    <img src={mail} alt='' />
                    <p>xyz@gmail.com</p><br></br>
                    <img src={loc} alt='' />
                    <p> NSUT -Dwarka</p>
                </div>

                <div className="social">
                    <a href="#"><img src={linkd} alt='' /></a>
                    <a href="#"><img src={insta} alt='' /></a>
                    <a href="#"><img src={twit} alt='' /></a>
                </div>


            </div>
        </>
    )
}
export default  Contact