import React from 'react'; // anywhere we use React we import React
import Header from './components/Header/Header' // import the Header component built
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import { BASE_URL, API_KEY, dates } from './constants/constants'

import { createGlobalStyle } from 'styled-components'
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
function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`

  // function createPost(url) {
  //   return(
  //     <CreatePost url={url} />
  //   )
  // }
  return (
    <div className="App">
      <GlobalStyle />
      <Header title='NASA Fact Cards' description='NASA Astronomy Pictures of the Day' />
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