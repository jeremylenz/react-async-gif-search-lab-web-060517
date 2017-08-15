import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      query: '',
      gifs: []
    }
  }

  render() {

    return (
      <div>
        <GifSearch handleChange={this.handleChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    )

  }

  loadNewGifs = (newGifs) => {

    fetch(apiUrl(this.state.query))
    .then(resp => resp.json())
    .then((resp) => {
      console.log(resp)
      this.setState(
        {gifs: resp}
      )
    })

  }

  handleChange = (newQuery) => {
    this.setState({
      query: newQuery
    }, this.loadNewGifs)

  }

} // end of class

export default GifListContainer
