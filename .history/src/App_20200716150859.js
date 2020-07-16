import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import Post from './components/Post/Post'
import { BASE_URL, API_KEY, dates } from './constants/constants'
import './App.css'; // import the app styling



function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`
  
  // function randomDate() {
  //   function randomNumber(min, max) {
  //     return Math.random() * (max - min) + min
  //   }

  //   let year = Math.floor(randomNumber(1996, 2019))
  //   let month = Math.floor(randomNumber(1, 12))
  //   let day = Math.floor(randomNumber(1, 28))
  //   let date = `${year}-${month}-${day}`
  //   dates.push(date)
  //   return dates
  // }
  dates.forEach((e) => {
    return (
    <Post url={url} date={e}/>
    )
  })
  console.log(dates)
  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <Post url={url} date={dates[0]} />
      </section>
    </div>
  );
}

export default App;