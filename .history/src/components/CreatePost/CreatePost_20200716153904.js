import React from 'react'
import Post from '../Post/Post'
import './CreatePost.css'
import dates from '../../constants/constants'

function CreatePost({ url, date }) {
  return(
    <div className="post">
      {
        dates.forEach(e => {
          <Post date=`${e}` url={url}/>
        })
      }
      <Post date={date} url={url}/>
    </div>
  )  
}

export default CreatePost