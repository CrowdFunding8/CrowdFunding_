import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"

const App = () => { // component name should start with capital letter
  return ( //to access component within an component we use component as an tag
     <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/about" element={<About/>}/>
     </Routes>
   //<> </>fragment used to when we need to use more than one tag
  )
}
export default App
