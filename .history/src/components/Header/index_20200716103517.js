import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header() {
  
  return (
    <div className='Header'>
      < className="Header-logo">
        <img src='/src/assets/photos/3068018.jpg' alt='logo'></img>
      </div>
      <div className="Header-title">
        <h1>NASAGram</h1>
      </div>
      <div className="Header-description">
        <h2>NASAPicOfTheDay</h2>
      </div>
    </div>
      
  )
}


// export Header to be imported in the app
export default Header