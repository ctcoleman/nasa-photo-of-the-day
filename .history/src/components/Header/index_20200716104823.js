import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header() {
  
  return (
    <div className="header">
      <div className="header-title">
        <h1 className='header-title'>
          NASAGram
        </h1>
      </div>
    </div>
    <nav className='Nav'>
      <div className='Nav-menus'>
        <div className='Nav-brand'>
        </div>
      </div>
    </nav>
  )
}


// export Header to be imported in the app
export default Header