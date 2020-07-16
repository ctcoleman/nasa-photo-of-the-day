import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header({title, description}) {
  return (
    <header className='Header-container'>
      <div className='Header-title-container'>
        <h1 id='Header-title'>{ title }</h1>
        <h2 id='Header-description'>{ description }</h2>
      </div>
    </header>
  )
}


// export Header to be imported in the app
export default Header