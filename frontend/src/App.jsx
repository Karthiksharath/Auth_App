import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Notfound from "./pages/Notfound"
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage"
import { useAuthentication } from "./auth"
import RedirectGoogleAuth from "./components/GoogleRedirectHandler"



function App() {

  const {isAuthorized} = useAuthentication();

  const ProtectedRegister = ()=>{
    return isAuthorized ? <Navigate to={"/"}/> : <AuthPage initialMethod={"register"}/>
  }

  const ProtectedLogin = ()=>{
    return isAuthorized ? <Navigate to={"/"}/> : <AuthPage initialMethod={"login"}/>
  }

 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login/callback" element={<RedirectGoogleAuth />} />
          <Route path="/register" element={<ProtectedRegister />}/>
          <Route path="/login" element={<ProtectedLogin />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
