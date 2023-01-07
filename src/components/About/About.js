import stylesheet from "../About/About.module.css";
import aboutus from "../images/aboutus.jpg";

const About=()=>{
    return(
        <div className={stylesheet.container}>
            <div className={stylesheet.main}></div>
            <div className={stylesheet.q}>
                <div>
                    <h1 className={stylesheet.heading}>About us</h1>
                </div>
                <div className={stylesheet.img}>
                    <img src={aboutus} alt="aboutus" className={stylesheet.aboutus} />
                </div>
            </div>
        </div>
    )
}
export default About