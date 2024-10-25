import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "../pages/Register"
import LandingPage from "../pages/LandingPage"

export default function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"
        Component={LandingPage}
        />

        <Route path="/register"
        Component={RegisterPage}
        />
      </Routes>
    </BrowserRouter>
  )
}