import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
<<<<<<< HEAD
=======
import Forgot from "./components/forgotPassword/forgot"
import NewIdea from "./components/newIdea/newIdea"
import Idea from "./components/ideas/idea"
>>>>>>> 50852b4193296600a32aabfea2d6e232a1c95c9c
import Register from "./components/register/register"

const App = () => { // component name should start with capital letter
  return ( //to access component within an component we use component as an tag
     <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/about" element={<About/>}/>
<<<<<<< HEAD
          <Route path="/register" element={<Register/>}/>
=======
          <Route path="/forgotPassword" element={<Forgot/>} />
          <Route path="/Newideas" element={<NewIdea/>} />
          <Route path="/ideas" element={<Idea/>}/>
          <Route path="/register" element={<Register/>} />

>>>>>>> 50852b4193296600a32aabfea2d6e232a1c95c9c
     </Routes>
   //<> </>fragment used to when we need to use more than one tag
  )
}
export default App
