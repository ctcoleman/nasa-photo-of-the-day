import React from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './CreatePost.css'

function CreatePost({ url }) {
  
  return(
    <div>
      <button 
        className='random-post-button'
        onClick={() => {
          debugger
          return(
            <Post date={randomDate()} url={url}/>
          )  
        }
        }>
          Add a post
        </button>
    </div>
  )
}

export default CreatePost