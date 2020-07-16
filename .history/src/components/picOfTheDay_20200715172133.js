import React from 'react'

function PicOfTheDay( { url, description } ) {
  const [picture, setPicture] = useState()
  return (
    <div id="picOfTheDay">
      <img src={url} alt={description}></img>
    </div>
  )
}

export default PicOfTheDay