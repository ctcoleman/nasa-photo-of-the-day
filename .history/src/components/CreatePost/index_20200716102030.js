import React from 'react'
import axios from 'axios'
import Post from '../Post'
import './CreatePost.css'

function CreatePost({ url }) {
  const [url, setUrl] = useState({url})
  return(
    <div>
      <button 
        className='random-post-button'
        onClick={() => {setUrl(`${url}&`)}>Add a post</button>
    </div>
  )
}