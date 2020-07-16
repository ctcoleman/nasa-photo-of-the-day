import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import { BASE_URL, API_KEY, dates } from './constants/constants'
import './App.css'; // import the app styling



function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`
  
  function randomDate() {
    function randomNumber(min, max) {
      return Math.random() * (max - min) + min
    }

    let year = Math.floor(randomNumber(1996, 2019))
    let month = Math.floor(randomNumber(1, 12))
    let day = Math.floor(randomNumber(1, 28))
    let date = `${year}-${month}-${day}`
    return date
  }

  return (
    <div className="App">
      <Header title='NASA Fact Cards' description='NASA Astronomy Pictures of the Day' />
      <section className="App-main">
        <CreatePost
      </section>
    </div>
  );
}

export default App;