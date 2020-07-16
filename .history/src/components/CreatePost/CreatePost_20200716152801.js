import React from 'react'
import Post from '../Post/Post'
imp
ort './CreatePost.css'

function CreatePost({ url, date }) {
  f
  return(
    <div className="post">
      <Post date={date} url={url} />
    </div>
  )  
}

export default CreatePost