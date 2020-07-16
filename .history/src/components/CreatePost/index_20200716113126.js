import React from 'react'
import axios from 'axios'
import Post from '../Post'
import './CreatePost.css'

function CreatePost({ url }) {
  const [url, setUrl] = useState({url})

  function randomNumber(min, max){
    return Math.random() * (max - min) + min
  }

  function randomDate() {
    let year = randomNumber(1996, 2019)
    let date = `${year}-${month}-${day}`
    return date

  }
  return(
    <div>
      <button 
        className='random-post-button'
        onClick={() => {
          setUrl(`${url}&date=${randomDate()}`)}}>Add a post</button>
    </div>
  )
}