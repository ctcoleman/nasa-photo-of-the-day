import React from 'react'
import Post from '../Post/Post'
import './CreatePost.css'
import {dates} from '../../constants/constants'

function CreatePost({ url }) {
  return(
    <div className="post">
      {
        dates.map(e => {
          return (
          <Post date={e} url={url}/>
        )})
      }
    </div>
  )  
}

export default CreatePost