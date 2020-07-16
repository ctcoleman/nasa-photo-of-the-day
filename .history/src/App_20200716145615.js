import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import Post from './components/Post/Post'
import { BASE_URL, API_KEY } from './constants/constants'
import './App.css'; // import the app styling



function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`
  let dates = []

  
  function randomDate() {
    function randomNumber(min, max) {
      return Math.random() * (max - min) + min
    }

    let year = Math.floor(randomNumber(1996, 2019))
    let month = Math.floor(randomNumber(1, 12))
    let day = Math.floor(randomNumber(1, 28))
    let date = `${year}-${month}-${day}`
    return dates.push(date)
  }
  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <button onClick={() => randomDate()}>Add post</button>
        {
          dats
        }
      </section>
    </div>
  );
}

export default App;