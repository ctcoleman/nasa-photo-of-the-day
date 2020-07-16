import React from 'react' // anywhere we use React we import React
import './Post.css' // add styling

// Create Post component
function Post({ url ) {

  return (
    <article className='Post'>
      <header>
        <div className='Post-user'>
          <div className='Post-user-nickname'>
            <span>{nickname}</span>
          </div>
        </div>
      </header>
      <div className='Post-image'>
        <div className='Post-image-bg'>
          <img alt={caption} src={image} />
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