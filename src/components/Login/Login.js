import stylesheet from "../Login/Login.module.css";
import profile from "../images/profile.jpg";
import password from "../images/password.png";
import email from "../images/email.jpg";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("")
  const [pass, setPassword] = useState("")
  const [selectBox] = useState("")

  //username
  const handleUsername=(event)=>{
    console.log(event.target.value);
    setUsername(event.target.value)
  }
  //password
  const handlePassword=(event)=>{
    console.log(event.target.value);
    setPassword(event.target.value)
  }
  //login button
  const handleLogin= () => {
    console.log(username,pass,selectBox)
  }


  return(
    <div className={stylesheet.main}>
      <div className={stylesheet.sub_main}>
        <div>
          <div className={stylesheet.imgs}>
            <div className={stylesheet.container_images}>
              <img src={profile} alt="profile" className={stylesheet.profile} />
            </div>
          </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className={stylesheet.email} />
                <input type="text" placeholder="Username" className={stylesheet.name} onChange={handleUsername} value={username}/>
              </div>
              <div className={stylesheet.second_input}>
                <img src={password} alt="password" className={stylesheet.email} />
                <input type="password" placeholder="Password" className={stylesheet.name} onChange={handlePassword} value={pass}/>
              </div>
              <div className={stylesheet.login_button}>
                <button>Cancel</button>&emsp;&emsp;
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}
export default Login;