import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import './App.css'; // import the app styling
import Header from './components/Header' // import the Header component
import Post from './components/Post' // import the Post component
import { BASE_URL, API_KEY } from './constants'

function App() {

  const [url, setUrl] = useState(null)
  const [pictureUrl, setPictureUrl] = useState([])
  const [caption, setCaption] = useState([])
  const [name, setName] = useState([])
  const [pictureName, setPictureName] = useState([])
  console.log(url)

  if (url === null){
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setPictureUrl(res.data.url)
        setCaption(res.data.explanation)
        setName(res.data.copyright)
        setPictureName(res.data.title)
        setUrl(res.)
      })
      .catch(err => console.log(err))
  }
  console.log(pictureUrl)

  return (
    <div className="App">
      <Header />
      <section className="App-main">
        <Post nickname={name} pictureName={pictureName} avatar='./avatar.jpg' caption={caption} image={pictureUrl} />
      </section>
    </div>
  );
}

export default App;