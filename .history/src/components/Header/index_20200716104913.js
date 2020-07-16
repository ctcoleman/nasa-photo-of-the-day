import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header() {
  
  return (
    <nav className='Nav'>
      <div className='Nav-menus'>
        <div className='Nav-brand'>
          <h1 className='Nav-brand-logo' href='/'>
            NASAGram
          </h>
        </div>
      </div>
    </nav>
  )
}


// export Header to be imported in the app
export default Header