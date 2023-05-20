import React from "react";
import './progress.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import bg91 from "../assests/reportbc.jpg"
// import desc1img from "../assests/desc1img.jpg"
import NavbarNew from "../components/Navbarnew";
import Popup from "./popup";

const data = [
  { name: '00:00', pulseRate: 65 },
  { name: '01:00', pulseRate: 68 },
  { name: '02:00', pulseRate: 70 },
  { name: '03:00', pulseRate: 75 },
  { name: '04:00', pulseRate: 80 },
  { name: '05:00', pulseRate: 85 },
  { name: '06:00', pulseRate: 88 },
  { name: '07:00', pulseRate: 90 },
  { name: '08:00', pulseRate: 96 },
  { name: '09:00', pulseRate: 92 },
  { name: '10:00', pulseRate: 74 },
  { name: '11:00', pulseRate: 78 },
  
];

const data1 = [
  { name: '00:00', Mood: 0 },
  { name: '01:00', Mood: 4 },
  { name: '02:00', Mood: 1 },
  { name: '03:00', Mood: 3 },
  { name: '04:00', Mood: 4 },
  { name: '05:00', Mood: 3 },
  { name: '06:00', Mood: 6 },
  { name: '07:00', Mood: 4 },
  { name: '08:00', Mood: 4 },
  { name: '09:00', Mood: 1 },
  { name: '10:00', Mood: 6 },
  { name: '11:00', Mood: 5 },
  
];


const Progress=()=>{

  
  const[date, setdate] = useState()
  const[info, setinfo] = useState("")  
  const minDate = new Date().toISOString().split('T')[0];

  const fch = async() => {
    const id=localStorage.getItem('id')
    const resp = await axios.post('/graph', id)
    const mood = resp.data
    console.log(mood)
    
  }

  const handlesubmit = async(e) => {

    e.preventDefault()
    setinfo("")
    const id=localStorage.getItem('id')
    const data = { id, date}
    const resp = await axios.post('/get', data)
    console.log(resp.data)
    setinfo(resp.data)

  }


  const handlsummary = async(e) => {

    e.preventDefault()
    setinfo("")
    const id=localStorage.getItem('id')
    const data = { id, date}
    const resp = await axios.post('/summary', {id : id})
    console.log(resp.data)
    setinfo(resp.data)


  }
  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);    };

  const sty = {
    'padding': '30px' ,
    'font-size': '25px' ,
    'background-color': '#d5cffd',
    'line-height' : '1.4'
  }

  // fch()


 return(

  
  
    <div className="mainreport">
      <NavbarNew/>
      <button className="click" onClick={handleButtonClick}>Device</button>
      {showPopup && <Popup onClose={handleClosePopup} />}

      

        {/* <div className="graphreport">
          <img src="" id="weekgraph"></img>
          
        </div>
        
        <div className="lowrep">
          <div className="iemg"> <img className="iiemg" id="reportimg" src={desc1img} /></div>
        <div className="tablereport">
        
          <details open>
          <summary className="headreport">Tasks for the week</summary>
          
          <table >
      <tr>
        <th>Day</th>
        <td className="rrh">Targets</td>
        <td className="rrh">Response</td>
      </tr>
      <tr>
        <th rowspan="4">Monday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        <td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      
      <tr>
        <th rowspan="4">Tuesday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        <td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
        
      <tr>
        <th rowspan="4">Wednesday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        <td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>

        
      <tr>
        <th rowspan="4">Thrusday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        <td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
        
      <tr>
        <th rowspan="4">Friday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        < td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
        
      <tr>
        <th rowspan="4">Saturday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        <td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
        
      <tr>
        <th rowspan="4">Sunday</th>
        <td className="activityreport">Meditation</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
        <td className="activityreport">Healthy diet</td>
        <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 hours of sleep </td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
      <tr>
      <td className="activityreport">8 glasses of water</td>
      <input type="checkbox" id="habit1-monday" />
        <label htmlFor="habit1-monday"> </label>
      </tr>
    
    </table>

    </details>
    </div>


      </div> */}

    <div>
      <script
        type="text/javascript"
        src="https://unpkg.com/dangerous-html@0.1.12/dist/default/lib.umd.js"
      ></script>
      <link href="./home.css" rel="stylesheet" />
      <div class="home-container">
      <div class="graph1">
                <p>Graph</p>
                <LineChart width={800} height={500} data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis  />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Mood" stroke="#000000" activeDot={{ r: 8 }} />
                </LineChart>
              </div>
        <section class="home-hero">
          <div class="home-menu">
            <div id="mobile-menu" class="home-mobile-navigation">

            
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-no9b-1500h.png"
                class="home-logo"
              />
              <div class="home-links">
                <span class="Link">Solutions</span>
                <span class="Link">How it works</span>
                <span class="Link">Prices</span>
              </div>
              <div id="close-mobile-menu" class="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" class="home-icon">
                  <path
                    d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"
                  ></path>
                </svg>
              </div>
            </div>
            
            <div>
              <dangerous-html
                html="<script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector('#mobile-menu')

    // Buttons
    const closeButton = document.querySelector('#close-mobile-menu')
    const openButton = document.querySelector('#open-mobile-menu')

    // On openButton click, set the mobileMenu position left to -100vw
    openButton.addEventListener('click', function() {
        mobileMenu.style.transform = 'translateX(0%)'
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton.addEventListener('click', function() {
        mobileMenu.style.transform = 'translateX(100%)'
    })
    </script>"
              ></dangerous-html>
            </div>
          </div>
          <div class="graph2">
                <p>Graph</p>
                <LineChart width={800} height={500} data={data}>
                <CartesianGrid strokeDasharray="4 8" />
                <XAxis dataKey="Pulse Rate" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pulseRate" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </div>
          <header class="home-header"><h1 class="home-text3">Report</h1></header>
          {/* <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-cdo-1500w.png"
            loading="lazy"
            class="home-image"
          /> */}
        </section>
        <section class="home-features">
          <span class="home-text4">
            <span>Let&apos;s See your Pulse rate</span>
            <br />
          </span>
          <div class="home-container1">
            <div class="home-container2"><div class="home-title"></div></div>
            {/* <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-cdo-1500w.png"
              loading="lazy"
              class="home-image1"
            /> */}
          </div>
        </section>

        <div className="rep-show">
          <h2 className="head">Want to see your particular day</h2>
          <input type='Date'
          className="report-date"
          max={minDate}
          value={date}
          placeholder="choose the date" 
          onChange={(e) => setdate(e.target.value)}/>
          <div className="see-btn">
            <button type='submit' className="btn-rep" onClick={handlesubmit}>See</button>
          </div>
          <br></br>
          <h2 className="head2">Click to see the summary of your week</h2>

          <div>
            <button type='submit' className="btn-rep" onClick={handlsummary}>See</button>
          </div>
        </div>

        <div className="text">
          <h3 className="inf" style={sty}>{info}</h3>
        </div>


        <section class="home-quote-container">
          <div class="home-quote">
            <span class="home-message">
              “Scale your content, grew lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.”
            </span>
            <div class="home-author">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
                class="home-avatar"
              />
              <span class="home-quote1">
                <span class="home-text7">—  Peter McPau</span>
                <span>, Founder and CEO, Active</span>
              </span>
            </div>
          </div>
        </section>
        <section class="home-banners"></section>
      </div>
    </div>



  </div>
   
 )
};
export default Progress;