import stylesheet from "./register.module.css"
import {HiUserAdd} from "react-icons/hi"
import {MdMarkEmailRead} from "react-icons/md"
import {MdConnectWithoutContact} from "react-icons/md"
import {RiLockPasswordFill } from "react-icons/ri"
import {RiLockPasswordLine} from "react-icons/ri"
import {IoMdArrowRoundBack}  from "react-icons/io"
import {useState} from "react"
const Register =() =>{

    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [mail,setmail]=useState("")
    const [pno,setpno]=useState("")
    const [user,setuser]=useState("")
    const [pass,setpass]=useState("")
    const [cpass,setcpass]=useState("")

    const handlefname=(event)=>{
        console.log(event.target.value)
        setfname(event.target.value)
    }

    const handleLname=(event)=>{
        console.log(event.target.value)
        setlname(event.target.value)
    }

    const handlemail=(event)=>{
        console.log(event.target.value)
        setmail(event.target.value)
    }

    const handlepno=(event)=>{
        console.log(event.target.value)
        setpno(event.target.value)
    }

    const handleuser=(event)=>{
        console.log(event.target.value)
        setuser(event.target.value)
    }
    const handlepass=(event)=>{
        console.log(event.target.value)
        setpass(event.target.value)
    }

    const handlecpass=(event)=>{
        console.log(event.target.value)
        setcpass(event.target.value)
    }
     
    const handleback=()=>{
        console.log("clicked") 
    }

    const handlereg=()=>{
        console.log(fname,lname,mail,pno,user,pass,cpass)
    }

    return(
        <>
        <div className={stylesheet.bg}>
        <div className={stylesheet.form}>
            <h1 className={stylesheet.heading}>Register</h1>
            <h3><HiUserAdd/> First Name <span>*</span></h3>
            <input type="text" placeholder="Enter first name" onChange={handlefname} value={fname}/>
            <h3><HiUserAdd/> Last Name <span>*</span></h3>
            <input type="text" placeholder="Enter last name" onChange={handleLname} value={lname} />
            <h3><MdMarkEmailRead/> E-mail</h3>
            <input type="email" placeholder="Enter valid e-mail" onChange={handlemail} value={mail} />
            <h3><MdConnectWithoutContact/> Contact Info <span>*</span></h3>
            <input type="number" placeholder="Enter 10-digit phone-number" onChange={handlepno} value={pno} />
            <h3><HiUserAdd/> Username <span>*</span></h3>
            <input type="text" placeholder="Enter valid username" onChange={handleuser} value={user} />
            <h3><RiLockPasswordLine/> Enter Password <span>*</span></h3>
            <input type="password" placeholder="Enter valid password" onChange={handlepass} value={pass} />
            <h3><RiLockPasswordFill/> Confirm Password <span>*</span></h3>
            <input type="password" placeholder="Enter valid password" onChange={handlecpass} value={cpass} />
            <br/><br/>
            <b><a href="" className={stylesheet.anchor} onClick={handleback}><IoMdArrowRoundBack/> Go Back</a></b>
            <br/><br/>
            <button className={stylesheet.register} onClick={handlereg}>Register</button>
                   
       </div>
       </div>
      
       </>

    )
}


export default Register