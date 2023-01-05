import style from "./forgot.module.css"
import {FaUserAlt} from "react-icons/fa"
import {RiLockPasswordLine} from "react-icons/ri"
import {RiLockPasswordFill} from "react-icons/ri"
import {FaArrowLeft} from "react-icons/fa"
import { useState } from "react"

const Forgot =() =>{

    const [username,setUsername]=useState ("")
    const [Newpassword,setNewpassword]=useState ("")
    const [ConfPassword,SetConfpassword]=useState ("")

    const handleChange =()=>{
        console.log(username,Newpassword,ConfPassword)
    }

    const handleUsername =(event)=>{
        console.log(event.target.value)
        setUsername(event.target.value)
    }

    const handleNewpassword =(event)=>{
        console.log(event.target.value)
        setNewpassword(event.target.value)
    }

    const handleConfpassword =(event)=>{
        console.log(event.target.value)
        SetConfpassword(event.target.value)
    }

    const handleclick =() =>{
        console.log("changed")
    }

    return(
       <>
        <div className={style.bg}>
            <div className={style.form}>
                <h1>Forgot Password?</h1>
                <h3><FaUserAlt/> Username</h3>
                <input type="text" placeholder="Enter Username" onChange={handleUsername} value={username}/>
                <h3><RiLockPasswordLine/> New Password</h3>
                <input type="password" placeholder="Enter New Password" onChange={handleNewpassword} value={Newpassword}/>
                <h3><RiLockPasswordFill/> Confirm Password</h3>
                <input type="password" placeholder="Confirm Password" onChange={handleConfpassword} value={ConfPassword} />
                <br/><br/>
                <b><a href="" onClick={handleclick}><FaArrowLeft/> Go Back</a></b>
                <br/><br/>
                <button onClick={handleChange}>Change</button>
            </div>
        </div>
       </>
    )
}

export default Forgot