import React from 'react'

function PicOfTheDay( { url, description } ) {
  const [picture, setPicture] = useState('')
  return (
    <div id="picOfTheDay">
      <img src={picture} alt={description}></img>
    </div>
  )
}

export default PicOfTheDay