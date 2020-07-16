import React from 'react' // Anywhere we use react we import react
import "./Header.css"
// create the Header Component which returns the header nav and logo
function Header({title, description}) {
  return (
    <HeaderCon className='Header-container'>
      <Heading className='Header-title-container'>
        <h1 id='Header-title'>{ title }</h1>
      </Heading>
      <Description className='Header-description-container'>
        <h2 id='Header-description'>{ description }</h2>
      </Description>
    </HeaderCon>
  )
}


// export Header to be imported in the app
export default Header