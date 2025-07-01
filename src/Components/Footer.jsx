import React from 'react'

const footerStyles ={
    position:"relative",
    top: document.documentElement.scrollTop
}

const Footer = () => {


  return (
    <div>
      <footer className="bg-dark text-light text-center py-4 mt-5" style={footerStyles}>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>
                <img src="/favicon.ico" alt="Recipe App Icon" style={{width: 32, height: 32, marginRight: 10, verticalAlign: 'middle'}} />
                About Recipe App
              </h5>
              <p>
                Discover, search, and save your favorite recipes!<br/>
                Built with React &amp; Vite for fast, modern web experience.
              </p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Contact</h5>
              <p>
                Email: <a href="mailto:abayo@example.com" className="text-warning">abayo@example.com</a><br/>
                Twitter: <a href="https://twitter.com/abayodev" target="_blank" rel="noopener noreferrer" className="text-warning">@abayodev</a><br/>
                GitHub: <a href="https://github.com/Abayo-UI" target="_blank" rel="noopener noreferrer" className="text-warning">abayo</a>
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li><a href="/" className="text-warning">Home</a></li>
                <li><a href="/favorites" className="text-warning">Favorites</a></li>
                <li><a href="/about" className="text-warning">About</a></li>
              </ul>
            </div>
          </div>
          <hr style={{background: '#ffa500', opacity: 0.3}}/>
          <div>
            Recipe App &copy; {new Date().getFullYear()} &mdash; Built with React &amp; Vite<br/>
            Developed by Abayo
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer