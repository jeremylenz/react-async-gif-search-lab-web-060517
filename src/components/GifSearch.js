import React from 'react'




class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {value: ''}
  }

  render() {

    return (
      <form>
        <input type="text" placeholder="search" value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    this.props.handleChange(event.target.value)

  }


}

export default GifSearch
