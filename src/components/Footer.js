import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <a href="#" className="logo"><img src="./img/logo.png" alt="Spotify"/></a>
          <ul className="directory">
            <li>
              <p>Company</p>
              <a href="#" className="cm-link">About</a><br/>
              <a href="#" className="cm-link">Jobs</a><br/>
              <a href="#" className="cm-link">For the Record</a>
            </li>
            <li>
              <p>Communities</p>
              <a href="#" className="cm-link">For Artists</a><br/>
              <a href="#" className="cm-link">Developers</a><br/>
              <a href="#" className="cm-link">Advertising</a><br/>
              <a href="#" className="cm-link">Investors</a><br/>
              <a href="#" className="cm-link">Vendors</a>
            </li>
            <li>
              <p>Usefull Links</p>
              <a href="#" className="cm-link">Support</a><br/>
              <a href="#" className="cm-link">Web Player</a><br/>
              <a href="#" className="cm-link">Free Mobile App</a><br/>
              <a href="#" className="cm-link">2020 Wrapped</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <a href="#"><img src="./img/ig.png" alt="Instagram"/></a>
          <a href="#"><img src="./img/twitter.png" alt="Twitter"/></a>
          <a href="#"><img src="./img/fb.png" alt="Facebook"/></a>
        </div>
      </div>
      <div className="container container-right"><span>USA</span><img src="./img/usa.jpg" alt="USA Flag"/></div>
      <div className="container container-center">
        <div className="about-us">
          <a href="#" className="cm-link">Legal</a>
          <a href="#" className="cm-link">Privacy Center</a>
          <a href="#" className="cm-link">Privacy Policy</a>
          <a href="#" className="cm-link">Cookies</a>
          <a href="#" className="cm-link">About Ads</a>
          <a href="#" className="cm-link">Additional CA Privacy Disciosures</a>
        </div>
        <p className="copyright">&#169;2020 Spotify AB</p>
      </div>
    </footer>
  )
}

export default Footer
