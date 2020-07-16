import React, { useState, useEffect } from 'react' // anywhere we use React we import React
import {Article, Header, Caption, CaptionParagraph, CaptionStrong, Image} from './PostStyle'
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
    <Article className='Post'>
      <Header>
        <span>{name}</span>
      </Header>
      <div className='Post-image'>
        <Image alt={caption} src={pictureUrl} />
      </div>
      <Caption className='Post-caption'>
        <CaptionStrong>{pictureName}</CaptionStrong>
        <CaptionParagraph>{caption}</CaptionParagraph>
      </Caption>
    </Article>
  )
}

// export Post Component to be used in the main app
export default Post