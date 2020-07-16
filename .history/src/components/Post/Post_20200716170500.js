import React, { useState, useEffect } from 'react' // anywhere we use React we import React
import {Article}
import axios from 'axios'
import './Post.css' // add styling

// Create Post component
function Post({ url, date }) {
  const [pictureUrl, setPictureUrl] = useState([])
  const [caption, setCaption] = useState([])
  const [name, setName] = useState([])
  const [pictureName, setPictureName] = useState([])

  const Article = styled.article `
    border-radius: 30px;
    border: 1px solid #e6e5e6;
    background-color: #fff;
    box-shadow: 5px 10px #3d3d3d;
    margin-bottom: 60px;
    margin-left: 20%;
    margin-right: 20%;
  `
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