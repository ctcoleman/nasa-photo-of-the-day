import React from 'react'
import Post from '../Post/Post'
import {dates} from '../../constants/constants'
import './CreatePost.css'
export default CreatePost

function CreatePost({ url, date }) {

  dates.forEach((e) => {
    console.log(e)
    return(
      render(
      <div className="post">
        <Post date={e} url={url} />
      </div>
    )  
  )}
  )
