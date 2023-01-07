import stylesheet from "./Contact.module.css";
import phone from "../images/phone.jpg";
import email from "../images/email.jpg";
import { useState } from "react";

const Forgot =() =>{
    const [username, setUsername] = useState("")
    const [emailid, setPassword] = useState("")
    const [message, set] = useState("")
    const [selectBox] = useState("")
  
    //username
    const handleUsername=(event)=>{
      console.log(event.target.value);
      setUsername(event.target.value)
    }
    //password
    const handleEmail=(event)=>{
      console.log(event.target.value);
      setPassword(event.target.value)
    }
    //password
    const handleMessage=(event)=>{
        console.log(event.target.value);
        setPassword(event.target.value)
      }
  
    //login button
    // const handleLogin= () => {
    //   console.log(username,pass,selectBox)
    // }
  

    return(
        <>
            <div className={stylesheet.bg}>
                <div className={stylesheet.form}>
                    <img src={email} alt="email" className={stylesheet.email} /> <b><label>20mfsb7000@soundaryainstitutions.in</label></b>
                    <img src={phone} alt="phone" className={stylesheet.phone} /> <b><label>9987654321</label></b>
                    <h1 className={stylesheet.heading}>Contact Us</h1>
                    <h3>Your Name <span>*</span></h3>
                    <input type="text" placeholder="Enter first name" onChange={handleUsername} value={username}/>
                    <h3>Your Email <span>*</span></h3>
                    <input type="email" placeholder="Enter your email" onChange={handleEmail} value={emailid}/>
                    <h3>Message <span>*</span></h3>
                    <textarea placeholder="Enter your Message" rows="6" cols="60" onChange={handleMessage} value={message}/><br/>
                    <b><a href="/" className={stylesheet.anchor}>Go Back</a></b>
                    <br/><br/>
                    <button className={stylesheet.cont}>Send</button>        
                </div>        
            </div>
        </>
    )
}

export default Forgot


