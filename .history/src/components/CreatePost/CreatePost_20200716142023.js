import React from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './CreatePost.css'

function CreatePost({ url, randomDate }) {
  return(
    
    <Post date={randomDate} url={url}/>
  )  
}

export default CreatePost