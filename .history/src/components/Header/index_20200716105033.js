import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header() {
  
  return (
    <nav className='Header'>
        <div className='Header-title-container'>
          <h1 className='Header-title'>
            NASAGram
          </h1>
        </div>
    </nav>
  )
}


// export Header to be imported in the app
export default Header