import React from 'react'

function PicOfTheDay( { url year } ) {
  return (
    <div id="picOfTheDay">
      <img src={url} alt='Pic of the day'></img>
    </div>
  )
}

export default PicOfTheDay