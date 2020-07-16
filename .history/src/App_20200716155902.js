import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import { BASE_URL, API_KEY, dates } from './constants/constants'
import './App.css'; // import the app styling



function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`

  function create
  return (
    <div className="App">
      <Header title='NASA Fact Cards' description='NASA Astronomy Pictures of the Day' />
      <section className="App-main">
        <CreatePost url={url} />
        <CreatePost url={url} />
        <button onClick={() => <CreatePost url={url} />}>Add Post</button>
      </section>
    </div>
  );
}

export default App;