import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import './App.css'; // import the app styling
import Header from './components/Header' // import the Header component
import Post from './components/Post' // import the Post component
import { BASE_URL, API_KEY } from './constants'

function App() {

  const [pictureUrl, setPictureUrl] = useState([])
  const [caption, setCaption] = useState([])
  const [name, setName] = useState([])
  const [pictureName, setPictureName] = useState([])


  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setPictureUrl(res.data.url)
      setCaption(res.data.explanation)
      setName(res.data.copyright)
      setPictureName(res.data.title)
      console.log(res)
    })
    .catch(err => console.log(err))

  console.log(pictureUrl)

  return (
    <div className="App">
      <Header />
      <section className="App-main">
        <Post />
      </section>
    </div>
  );
}

export default App;