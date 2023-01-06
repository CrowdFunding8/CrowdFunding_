import React from "react";
import stylesheet from '../Home/Home.module.css';
import crowdlogo from "../images/crowdlogo.jpg";

const Home=()=>{
    return(
        <header>
            <nav>
                <div className={stylesheet.logo}><img src={crowdlogo} alt="logo"/> </div>
                <div className={stylesheet.menu}>
                    <a href="/">Home</a>
                    <a href="/Contact">Contact</a>
                    <a href="/About">AboutUs</a>
                    <a href="/Login">Login</a>
                    <a href="/SignUp">SignUp</a>
                </div>
            </nav>
            <main>
                <section>
                    <h1>Welcome to Crowd Funding</h1>
                    <p>A platform for anyone who wants to contribute to a social cause but can’t make time due to their hectic schedule.</p>
                </section>
            </main>
        </header> 
    )
}

export default Home