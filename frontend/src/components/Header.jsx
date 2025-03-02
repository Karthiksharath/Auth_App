import React from 'react'
import "../styles/Header.css"
import bgwoman from "../assets/bg-woman.jpg";

const Header = () => {
  return (
    <div className='header'>
      <img src={bgwoman} alt="" className='header-bg' />
      <div className="header-content">
        <h1>Welcome to Auth App</h1>
        <h3>Start using Now :)</h3>
      </div>
      
    </div>
  )
}

export default Header
