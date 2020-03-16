import React, { Component } from 'react'
import ShowIngredients from './ShowIngredients'
import SelectAlcohol from './SelectAlcohol'
import axios from 'axios'

class SelectIngredients extends Component {
  state = {
    selectedIngredient: 'Coca-Cola',
    cocktailList: [],
    selectedCocktail: []
  }

  setIngredient (event) {
    this.setState({
      selectedIngredient: event.target.value
    })
  }

  async submitHandler () {
    let result = await axios.get(
      `/cocktails?q=${this.state.selectedIngredient}`
    )
    this.setState({
      cocktailList: result.data.drinks
    })
  }

  async getDetails (event) {
    let id = event.target.dataset.id
    let result = await axios.get(`/cocktails/${id}`)
    this.setState({
      selectedCocktail: result.data.drink
    })
  }

  render () {
    let cocktailIndex, renderSpecificCocktail
    let cocktailDetails = this.state.selectedCocktail

    if (this.state.cocktailList !== []) {
      cocktailIndex = this.state.cocktailList.map(cocktail => {
        return (
          <div
            className='card small'
            id='cocktail-container'
          >
            <div className='image'>
              <img
                className='drinkImage'
                src={cocktail.strDrinkThumb}
                alt='Cocktail'
              />
            </div>
            <button
              key={cocktail.idDrink}
              data-id={cocktail.idDrink}
              onClick={this.getDetails.bind(this)}
            >{cocktail.strDrink}</button>
          </div>
        )
      })
    }

    if (cocktailDetails.id > 0) {
      renderSpecificCocktail = (
        <div className='card' key={cocktailDetails.id} id='cocktail-container'>
          <div className='image'>
            <img
              className='drinkImage'
              src={cocktailDetails.image}
              alt='Cocktail'
            />
          </div>
          <div className="right">
          <div className='header'>{cocktailDetails.name}</div>
          <div className='meta'>{cocktailDetails.category}</div>
          <div className='description'>
            Ingredients:
            {cocktailDetails.ingredients.map(item => {
              return (
                <div key={cocktailDetails.id} id='ingredients-container'>
                  {item.name} {item.measure}
                </div>
              )
            })}
          </div>
          <div className='extra content'>
            Instructions: {cocktailDetails.instructions}
          </div>
          <div className='extra content'>Glass: {cocktailDetails.glass}</div>
        </div>
      </div>
      )
    }

    return (
      <>
        <div className='top'>
          <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
          <button onClick={this.submitHandler.bind(this)}>Submit</button>
        </div>
        <div className='middle'>
          <div id='specific_cocktail' className='ui cards'>
            {renderSpecificCocktail}
          </div>
        </div>
        <div id='cocktail_list' className='ui cards'>
          {cocktailIndex}
        </div>
        <div>
          <SelectAlcohol />
        </div>
      </>
    )
  }
}

export default SelectIngredients
