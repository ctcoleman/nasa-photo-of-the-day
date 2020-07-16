import React from 'react'

function PicOfTheDay( { url } ) {
  return (
    <div id="picOfTheDay">
      <img src={url.url} alt={url.explanation}></img>
    </div>
  )
}

export default PicOfTheDay