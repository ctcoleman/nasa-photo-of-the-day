import React from 'react'
import Post from '../Post/Post'
import render from 'react-dom'
import {dates} from '../../constants/constants'
import './CreatePost.css'

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
}
  
  export default CreatePost