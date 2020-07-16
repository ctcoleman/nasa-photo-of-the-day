import React from 'react'
import axios from 'axios'
import Post from '../Post'
import './CreatePost.css'

function CreatePost({ url }) {
  const [url, setUrl] = useState({url})

  function randomNumber(min, max){
    return Math.random() * (max - min) + min
  }

  function randomDate() {
    let year = randomNumber(1996, 2019)
    let month = randomNumber(1, 12)
    let day = randomNumber(1, 28)
    return `${year}-${month}-${day}`
  }
  return(
    <div>
      <button 
        className='random-post-button'
        onClick={() => {
          setUrl(`${url}&date=${randomDate()}`)
          <Post url={url}/>
          }
        }>
          Add a post
        </button>
    </div>
  )
}