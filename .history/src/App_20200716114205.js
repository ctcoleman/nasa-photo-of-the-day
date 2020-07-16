import React, { useState } from 'react'; // anywhere we use React we import React
import CreatePost from './components/CreatePost'
import './App.css'; // import the app styling
import Header from './components/Header' // import the Header component

function App() {

  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <div className="App-Button">
          <CreatePost />
        </div>
      </section>
    </div>
  );
}

export default App;