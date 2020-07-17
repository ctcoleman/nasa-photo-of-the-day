import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component
import Post from './components/Post/Post' // import the Post component
import { BASE_URL, API_KEY, /*dates*/ } from './constants/constants' // import the constants we will use to form the API url, API key, and the dates array
import { createGlobalStyle } from 'styled-components' // import styled components createGlobalStyle method so we can add global styling

// define the styled components global styling
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
 background: rgba(68, 67, 67, 0.753);
 color: white;
 -webkit-font-smoothing: antialiased;
}

body, input, button {
 font-family: 'Helvetica';
}

button {
 cursor: pointer;
}
`
// define the our React App
function App() {
  // define the url we will use in the axios call with the imported constants
  const url = `${BASE_URL}?api_key=${API_KEY}`

  // randomDate function to make sure each post is always different
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
  // // createPost function for button..???needed???
  // function createPost(url) {
  //   return(
  //     <Post url={url} date={randomDate()} />
  //   )
  // }

  // the return statement (changes to be made to the DOM)
  // call upon the globalstyles component the Header component (with title and description props)
  // call upon the Post component (with the url prop and date defined with the url variable define at the top of the app)
  return (
    <div className="App">
      <GlobalStyle />
      <Header title='NASA Fact Cards' description='NASA Astronomy Pictures of the Day' />
      <section className="App-main">
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
        <Post url={url} date={randomDate()} />
  <button
    onClick={() => {
      const appMain = document.getElementByClass('App-main')
      
        <Post url={url} date={randomDate()} />
      </section>
    }
      }> Add Post</button>
      </section>
    </div>
  );
}

// export by default the React App when imported
export default App;