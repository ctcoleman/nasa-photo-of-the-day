import React from 'react'
import Post from '../Post/Post'
import './CreatePost.css'


function CreatePost({ url, date }) {
  return(
    <div className="post">
      {

      }
      <Post date={date} url={url}/>
    </div>
  )  
}

export default CreatePost