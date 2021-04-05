import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#" className="logo"><img src="./img/logo.png" alt=""/></a>
        <nav>
          <a href="#" className="cm-link">Premium</a>
          <a href="#" className="cm-link">Support</a>
          <a href="#" className="cm-link">Download</a>
          <span>|</span>
          <a href="#" className="cm-link">Sign up</a>
          <a href="#" className="cm-link">Log in</a>
        </nav>
      </div>
    </header>
  )
}

export default Header