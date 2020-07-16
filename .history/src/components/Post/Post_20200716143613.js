import React, { useState, useEffect } from 'react' // anywhere we use React we import React
import axios from 'axios'
import './Post.css' // add styling

// Create Post component
function Post({ url, date }) {
  const [details, setDetails] = useState(null)
  // const [pictureUrl, setPictureUrl] = useState([])
  // const [caption, setCaption] = useState([])
  // const [name, setName] = useState([])
  // const [pictureName, setPictureName] = useState([])

  useEffect(() => {
    axios.get(`${url}&date=${date}`)
    .then(res => {
      setDetails(res.data)
      // setPictureUrl(res.data.url)
      // setCaption(res.data.explanation)
      // setName(res.data.copyright)
      // setPictureName(res.data.title)
      // console.log(res)
      console.log(details)
    })
    .catch(err => console.log(err))
  },[url, date])
  
  const name = details.copyright
  const pictureName = details.title
  const caption = details.explanation
  const pictureUrl = details.url
  return (
    <article className='Post'>
      <header>
        <div className='Post-user'>
          <div className='Post-user-nickname'>
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
        <strong>{pictureName}</strong> {caption}
      </div>
    </article>
  )
}

// export Post Component to be used in the main app
export default Post