import React from 'react'
import axios from 'axios'
import Post from '../Post'
import './CreatePost.css'

function CreatePost({ url }) {
  const [url, setUrl] = useState({url})

  function randomDate() {
    let 
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