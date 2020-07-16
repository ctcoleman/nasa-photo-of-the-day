import React, { useState, useEffect } from 'react' // anywhere we use React we import React
import axios from 'axios'
import './Post.css' // add styling

// Create Post component
function Post({ url, date }) {
  const [pictureUrl, setPictureUrl] = useState([])
  const [caption, setCaption] = useState([])
  const [name, setName] = useState([])
  const [pictureName, setPictureName] = useState([])

  useEffect(() => {
    axios.get(`${url}&date=${date}`)
    .then(res => {
      setPictureUrl(res.data.url)
      setCaption(res.data.explanation)
      setName(res.data.copyright)
      setPictureName(res.data.title)
    })
    .catch(err => console.log(err))
  },[url, date])
    
  return (
    <article className='Post'>
      <header>
        <div className='Poster'>
          <div className='Poster-name'>
            <span>{name}</span>
          </div>
        </div>
      </header>
      <div className='Post-image'>
        <div className='Post-image-bg'>
          <img alt={caption} src={pictureUrl} />
        </div>
      </div>
      <div className='Post-caption'>
        <strong>{pictureName}</strong>
        <p>{caption}</p>
      </div>
    </article>
  )
}

// export Post Component to be used in the main app
export default Post