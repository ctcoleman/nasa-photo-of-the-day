import React from 'react'
import Post from '../Post/Post'
import './CreatePost.css'

function CreatePost({ url }) {

  function randomDate() {
    function randomNumber(min, max) {
      return Math.random() * (max - min) + min
    }

    let year = Math.floor(randomNumber(1996, 2019))
    let month = Math.floor(randomNumber(1, 12))
    let day = Math.floor(randomNumber(1, 28))
    let date = `${year}-${month}-${day}`
    return date
  }

  return(
    <div className="post">
      {/* {
        dates.map(e => {
          return (
          <Post date={e} url={url}/>
        )})
      } */}
      <Post url={url} date={randomDate()} />
    </div>
  )  
}

export default CreatePost