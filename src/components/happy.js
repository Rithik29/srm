import React from "react";
import './happy.css';
import bg1 from "../assests/bgimage1.jpg";
import bg2 from "../assests/bgimg2.jpg";
import bg3 from "../assests/bgiamge3-removebg-preview.png";
// import Navbar from "./Navbar";



const Happy =() => {
    return (
        <div className="main">
         {/* <Navbar/>  */}
        <div className="part1">
           <div className="iimg"> <img src={bg1} /></div>
            <div className="textb">
                
                  <p>
                  <h3 >SELF CARE</h3>
                  <br/>
                  &#127799; Practice self-care: Engage in activities that make you feel good,
                    such as getting a massage,taking a relaxing bath,
                    <br/><br/><br/>
                    &#127799; Spend time in nature: Being outside and surrounded by natural
                    beauty can boost your mood and reduce stress. Spend time in nature.
                    <br/><br/><br/>
                    &#127799; Give back to others:Helping others can be a great way to 
                     maintain a positive state of mind. 
                     
                 </p>
            </div>
        </div>
        <div className="part2">
        <div className="iimg"> <img src={bg2} /></div>
            <div className="textb2">
            <p>
            <h3 >SELF CARE</h3>
            <br/>
                &#127799; Take on new challenges: Challenge yourself to learn something new
                    or try something that's outside your comfort zone. 
                    <br/><br/><br></br>
                    &#127799; Practice gratitude: Make a habit of focusing on the positive things
                    in your life,such as your relationships, health, and personal growth.
                    
                    <br/><br/><br></br>
                    &#127799; Set achievable goals: Having a sense of purpose and 
                    direction can help you maintain a positive state of mind.
                    
                </p>
            </div>
        </div>
        <div className="part3">
        <div className="iimg"> <img src={bg3} /></div>
            <div className="textb">
               <p>
               <h3 >SELF CARE</h3>
               <br/>
               &#127799; Get creative: Engage in creative activities such as painting, drawing, or writing. This can be a
                great way to express yourself.
                <br/><br/><br/>
                &#127799; Connect with loved ones: Spending time with friends and family can 
                help you feel more connected and loved. 
                <br/><br/><br/>
                &#127799; Take care of your physical health: Maintaining good physical health 
                is important for mainting a positive state of mind.
                </p>
            </div>
        </div>
        </div>
           
      
       
  )
    
};

export default Happy;
