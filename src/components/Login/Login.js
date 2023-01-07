import style from "../Login/Login.module.css";

function Login() {
  return(
      <div className={style.MainContainer}>
        <div>
          <div className={style.WelcomeText}>
            <h1>Welcome</h1><br/><br/><br/>
            <div className={style.InputContainer}>
              <br/><br/><br/>
              <input type="text" placeholder="Enter Username"/>
              <input type="text" placeholder="Enter Password"/>
              <div>
                <button>Login</button>
              </div>
              <div className={style.forgotpassword}>
                <a href="/Forgot">Forgot Password ?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Login;