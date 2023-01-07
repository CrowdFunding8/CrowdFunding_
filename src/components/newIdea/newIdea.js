import style from "./newIdea.module.css"
import {VscRequestChanges} from "react-icons/vsc"
import {SiGooglescholar} from "react-icons/si"
import {GiSuitcase} from "react-icons/gi"
import {GiTakeMyMoney} from "react-icons/gi"
import {RiFundsFill} from "react-icons/ri"
import {TiTick} from "react-icons/ti"
import {SiSamsungpay} from "react-icons/si"
import {MdOutlineQrCode2} from "react-icons/md"
import {useState} from "react"

const NewIdea=()=>{

    const [purpose,setpurpose]=useState ("")
    const [Education,setEducation]=useState("")
    const [Employment,setEmployement]=useState("")
    const [Income,setIncome]=useState("")
    const [raise,setRaise]=useState("")
    const [link,setlink]=useState("")
    const [file,setfile]=useState("")
    

    const handleSubmit=()=>{
        console.log(purpose,Education,Employment,Income,raise,link,file)
    }

    const handlePurpose=(event)=>{
        console.log(event.target.value)
        setpurpose(event.target.value)
    }
    const handleEducation=(event)=>{
        console.log(event.target.value)
        setEducation(event.target.value)
    }

    const handleEmployment=(event)=>{
        console.log(event.target.value)
        setEmployement(event.target.value)
    }

    const handleIncome=(event)=>{
        console.log(event.target.value)
        setIncome(event.target.value)
    }

    const handleRaise=(event)=>{
        console.log(event.target.value)
        setRaise(event.target.value)
    }

    const handleLink=(event)=>{
        console.log(event.target.value)
        setlink(event.target.value)
    }

    const handlefile=(event)=>{
        console.log(event.target.value)
        setfile(event.target.value)
    }


    return(
        <>
        <div className={style.bg}>
            <br/><br/>
            <div className={style.form}>
                <h1 className={style.heading}>Describe Idea</h1>
                <h3><VscRequestChanges/>  Purpose of Raising Funds</h3>
                <textarea placeholder="State reason in detail" rows="5" cols="70" onChange={handlePurpose} value={purpose} />
                <h3><SiGooglescholar/> Educational Qualification</h3>
                <input type="text" placeholder="Enter Qualification" onChange={handleEducation} value={Education}/>
                <h3> <GiSuitcase/>Employement Status</h3>
                <input type="text" placeholder="Enter Employment Status" onChange={handleEmployment} value={Employment} />
                <h3> <GiTakeMyMoney/>Monthly Income</h3> 
                <input type="number" placeholder="Enter monthly Income in rupees" onChange={handleIncome} value={Income} />
                <h3><RiFundsFill/>How much do you want to raise?</h3>
                <input type="number" placeholder="Enter amount in rupees" onChange={handleRaise} value={raise} />
                <h3><SiSamsungpay/> UPI link</h3>
                <input type="url" placeholder="Any UPI link to transfer funds" onChange={handleLink} value={link} />
                <h3><MdOutlineQrCode2/> QR code for payment</h3>
                <input type="file" placeholder="upload image" onChange={handlefile} value={file}/>
                <br/><br/>
                <button onClick={handleSubmit}><TiTick/>Submit</button>
                
            </div>
            <br/><br/><br/>
        </div>
            
        </>
    )
}

export default NewIdea