import React from 'react'

function PicOfTheDay( { url } ) {
  return (
    <div id="picOfTheDay">
      <img src={url} alt=''></img>
    </div>
  )
}

export default PicOfTheDay