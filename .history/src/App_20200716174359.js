import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
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

  // // createPost function for button..???needed???
  // function createPost(url) {
  //   return(
  //     <CreatePost url={url} />
  //   )
  // }

  // the return statement (changes to be made to the DOM)
  return (
    <div className="App">
      {// Define the global style component}
      <GlobalStyle />
      // call the Header component witht the props for title and description
      <Header title='NASA Fact Cards' description='NASA Astronomy Pictures of the Day' />
      //
      <section className="App-main">
        <CreatePost url={url} />
        <CreatePost url={url} />
        <CreatePost url={url} />
        {/* <button onClick={() => createPost({url})}>Add Post</button> */}
      </section>
    </div>
  );
}

export default App;