import React from 'react'
import axios from 'axios'
import Post from '../Post'
import './CreatePost.css'

function CreatePost({ url }) {
  const [url, setUrl] = useState({url})

  function randomDate() {
    return date

  }
  return(
    <div>
      <button 
        className='random-post-button'
        onClick={() => {
          setUrl(`${url}&date=`)}}>Add a post</button>
    </div>
  )
}