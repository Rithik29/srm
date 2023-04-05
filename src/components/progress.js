import React from "react";
import './progress.css';
// import bg91 from "../assests/reportbc.jpg"
// import desc1img from "../assests/desc1img.jpg"
import NavbarNew from "../components/Navbarnew";
const Progress=()=>{
 return(
 
  <div className="mainreport">
    <NavbarNew/>

    <div className="graphreport">
      <img src="" id="weekgraph"></img>
      
    </div>
     
    <div className="lowrep">
      {/* <div className="iemg"> <img className="iiemg" id="reportimg" src={desc1img} /></div> */}
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


   </div>
   </div>
 )
};
export default Progress;