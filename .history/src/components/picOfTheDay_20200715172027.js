import React from 'react'

function PicOfTheDay( { url } ) {
  return (
    <div id="picOfTheDay">
      <img src={url}></img>
    </div>
  )
}

export default PicOfTheDay