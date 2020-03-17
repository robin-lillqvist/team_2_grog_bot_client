import React, { Component } from 'react'
import axios from 'axios'

class SelectAlcohol extends Component {
  state = {
    alcoholList: []
  }
  setAlcohol (event) {
    this.setState({
      selectedAlcohol: event.target.value
    })
  }

  async onSearchHandler () {
    let result = await axios.get(
      `/alcohols?country=Sverige&q=${this.state.selectedAlcohol}`
    )
    this.setState({
      alcoholList: result.data.alcohols
    })
  }
  render () {
    let alcoholIndex
    if (this.state.alcoholList !== []) {
      alcoholIndex = this.state.alcoholList.map(alcohol => {
        return (
          <div
            className='card small'
            key={alcohol.ProductId}
            id='alcohol-container'
          >
            <div className='image'>
              <img
                className='drinkImage'
                src={alcohol.Thumbnail.ImageUrl}
                alt='alcohol selection'
              />
            </div>
            <div className='alcohol-content'>
              <div className='header'>{alcohol.ProductNameBold}</div>
              <div className='description'>{alcohol.ProductNameThin}</div>
              <div className='description'>{alcohol.PriceText}</div>
              <div className='description bottom'>{alcohol.VolumeText}</div>
            </div>
          </div>
        )
      })
    }
    return (
      <>
        <select
          key='alcohols'
          id='alcohol_selector'
          onChange={this.setAlcohol.bind(this)}>
          <option value='Vodka'>Vodka</option>
          <option value='Gin'>Gin</option>
          <option value='Whisky'>Whisky</option>
          <option value='Mörk rom'>Dark Rum</option>
          <option value='Ljus rom'>Light Rum</option>
          <option value='Smaksatt sprit'>Flavoured Liquor</option>
          <option value='Smaksatt vodka'>Flavoured Vodka</option>
        </select>
        <button onClick={this.onSearchHandler.bind(this)}>Search</button>
        <div id='alcohol_list' className='ui cards'>{alcoholIndex}</div>
      </>
    )
  }
}
export default SelectAlcohol
