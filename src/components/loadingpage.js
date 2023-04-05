import DotSpinner from './spin'
import "./loadingpage.css"
import { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Quotes =[
  '“One who sees inaction in action, and action in inaction, is intelligent among men.”',
'  “You are only entitled to the action, never to its fruits.”',
'“Man is made by his belief. As he believes, so he is”',
'“You are what you believe in. You become that which you believe you can become”',
"Those who restrain the external organs of action, while continuing to dwell on sense objects in the mind, certainly delude themselves and are to be called hypocrites.",
"It is lust alone, which is born of contact with the mode of passion, and later transformed into anger. Know this as the sinful, all-devouring enemy in the world.",
"Just as a fire is covered by smoke, a mirror is masked by dust, and an embryo is concealed by the womb, similarly one’s knowledge gets shrouded by desire.",
"The senses, mind, and intellect are said to be breeding grounds of desire. Through them, it clouds one’s knowledge and deludes the embodied soul.",
"The truly learned, with the eyes of divine knowledge, see with equal vision a Brahmin, a cow, an elephant, a dog, and a dog-eater.",
"Those persons are yogis, who before giving up the body are able to check the forces of desire and anger; and they alone are happy.",


]


const Load = () => {

    const navigate=useNavigate()
    //const [data, setdata]=useState()
    const [out, setout]=useState(null)


    // useEffect(async() => {

    const change = async() => {

        try {
            const id = localStorage.getItem('text')
            const mail = localStorage.getItem('id')
            console.log(mail)
            console.log(id)
            const send = {mail, id}
            const response = await axios.post('/model', send)
            const data=response.data
            // data=parseInt(data)
            // if(response)
            // {
            //     setout(true)
            // }
            // localStorage.setItem('id', id)
            // //console.log(typeof token);
            
            //window.location.reload()
            alert(data)
            console.log(data);
            console.log(typeof data)
            const a=0
            if(data==a)
            {
                navigate('/suicide')
            }
            else if(data==1 || data==2)
            {
                navigate('/sad')
            }
            else if(data==7)
            {
                navigate('/anxiety')
            }    
            else
            {
                navigate('/happy')
            }      
            
                
            // return () => {
            //     navigate(-1)
            // }
            
        }catch (error) {
            console.error(error.response);
        }

    }

    change()
        
    // }, [])


  return (
    <div className='loading'>
      <div className='loadcontainer'>
        
        <p>{Quotes[Math.floor(Math.random() * Quotes.length)]}</p>
        <DotSpinner 
        />
        <br></br><br></br><br></br><br></br>
        <p className='ploading'>Loading...</p>

      </div>
      
    </div>
  );
  
  
};
export default Load