import React, { useState, useRef } from "react";
import "./camera.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CameraCapturePage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.log("Error accessing camera:", error);
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/png");

    setCapturedImage(image);
    video.pause();
  };



  const navigate=useNavigate()
  const recaptureImage = () => {
    setCapturedImage(null);
    videoRef.current.play();
  };

  const sendImage = async(e) => {
    // Handle sending the captured image to the backend
    // Example using fetch:

    try{

      const resp= await axios.post('/capture', {image : capturedImage})
      const emotion = resp.data
      console.log(emotion)
      if(emotion == 'happy')
      {
        alert("Alright Darling")
        navigate(-1)

      }
      else
      {
        alert("Darling why sad kadhe has vi liya karo")
        window.location.reload();
      }
    }catch(error)
    {
      console.log(error)
    }
    // fetch('/api/uploadImage', { 
    //   method: 'POST',
    //   body: JSON.stringify({ image: capturedImage }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
      // .then(response => {
      //   // Handle the response from the server
      // })
      // .catch(error => {
      //   // Handle the error
      // });
  };

  return (
    <div>
      <h1>Capture a Funny Pose !!</h1>
      {capturedImage ? (
        <div>
          <img src={capturedImage} alt="Captured" />
          <button className="button1" onClick={recaptureImage}>Recapture</button>
          <button className="button4" onClick={sendImage}>Send</button>
        </div>
      ) : (
        <div>
          <video ref={videoRef} />
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <button className="button2" onClick={startCamera}>Start Camera</button>
          <button className="button3" onClick={captureImage}>Capture</button>
        </div>
      )}
    </div>
  );
};

export default CameraCapturePage;
