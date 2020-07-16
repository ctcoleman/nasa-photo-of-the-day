import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header() {
  
  return (
    <div className='Header'>
      <div "Header-logo">
        <img src='' alt='logo'/>
      </div>
      <div className="Header-title">
        <h1>NASAGram</h1>
      </div>
      
    </div>
  )
}


// export Header to be imported in the app
export default Header