import StyleSheet from "./ideas.module.css"
import {BsPlusLg} from "react-icons/bs"

const Idea=()=>
{
    return(
        <div className={StyleSheet.form}>
            <div>
                <h1>Pitched Ideas</h1>
                <div className={StyleSheet.idea1}>
                    <h2>Title1</h2>
                    <br/><br/>
                    <p>Description of the idea and how it will help the society.</p>
                </div>
                <div className={StyleSheet.idea2}>
                    <h2>Title1</h2>
                    <br/><br/>
                    <p>Description of the idea and how it will help the society.</p>
                </div> 
                <button className={StyleSheet.new} alt="Pitch New Idea"><BsPlusLg/> Pitch</button> 
            </div>
        </div>

    )
}

export default Idea