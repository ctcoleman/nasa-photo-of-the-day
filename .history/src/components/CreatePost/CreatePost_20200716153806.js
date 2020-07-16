import React from 'react'
import Post from '../Post/Post'
import './CreatePost.css'
import dates from '../../cons'

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