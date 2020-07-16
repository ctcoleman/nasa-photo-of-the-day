import React from 'react'
import Post from '../Post/Post'
import dates from '../../constants/constants.js'
import './CreatePost.css'

function CreatePost({ url, date }) {
  dates.forEach(() => {
    return(
      <div className="post">
        <Post date={date} url={url} />
      </div>
    )  
  })
}

export default CreatePost