import React from "react";
import './appsec.css'
import mobile from '../assests/mobile.png';
import gp from '../assests/gp.png';
import as from '../assests/as.png';
import icon1 from '../assests/icon1.png';
import Icon2 from '../assests/Icon2.png';
import icon3 from '../assests/pat.png';
const Appsec=() => {
    return(
        <div className="app-sec">

            <div className="app-img">
                <img src={mobile} alt='Mobile' />
            </div>

            <div className="app-det">

                <div className="app-head">
                    <img id="top" src={icon3} alt='icon' />
                    <h1>Our App Geared Up for Mobile Platforms</h1>
                    <hr></hr>
                </div>

                <div className="app-low-head">
                    <h5> Our geeks are in full swing relentlessly coading our sleek new app to bring it out to you asps so it'll we a click away from you</h5>
                </div>

                <div className="app-info">
                    <div className="icon">
                        <img src={icon1} alt='icons'></img>
                    </div>
                    <div className="icon-info">
                        <h3><strong>Gautrenteed Results</strong></h3>
                        <hr></hr>
                        <h5>Hello how are  you khana kha ke jaana</h5>
                    </div>
                    <div className="icon">
                        
                        <img src={Icon2} alt='icons'></img>
                    </div>
                    
                    <div className="icon-info">
                        <h3><strong>Gautrenteed Results</strong></h3>
                        <hr></hr>
                        <h5>Hello how are  you khana kha ke jaana</h5>
                    </div>
 
                </div>

                <div className="foot">
                        <img className="im" src={gp} alt='img' />
                        <img className="im" src ={as} alt='img' />
                </div>

            </div>
        </div>
    )
}
export default Appsec