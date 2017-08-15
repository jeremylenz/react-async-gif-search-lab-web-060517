import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

let apiUrl = (query) => {

return `http://api.giphy.com/v1/gifs/search?q={query}&api_key=dc6zaTOxFJmzC`

}

ReactDOM.render(< App />, document.getElementById('container'))
