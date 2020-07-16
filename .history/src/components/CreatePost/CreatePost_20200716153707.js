import React from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './CreatePost.css'

function CreatePost({ url, randomDate }) {
  return(
    <div className="post">
      <Post date={randomDate} url={url}/>
    </div>
  )  
}

export default CreatePost