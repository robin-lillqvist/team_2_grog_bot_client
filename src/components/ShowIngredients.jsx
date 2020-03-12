import React, { Component } from 'react'
import axios from 'axios'

export default class ShowIngredients extends Component {
  state = {
    ingredientsList: [],
    selectedIngredients: []
  }

  onChangeHandler = event => {
   
    let updatedCheckbox = event.target.value
    let selected = this.state.selectedIngredients
    console.log(selected)
    let isInArray = selected.includes(updatedCheckbox)
    let ingredient1 = []
    ingredient1.push(updatedCheckbox)
    this.setState({selectedIngredients: ingredient1})
    console.log(isInArray)
    debugger
  }

  componentDidMount () {
    axios.get('/ingredients').then(response => {
      this.setState({
        ingredientsList: response.data.ingredients
      })
    })
  }
  render () {
    let ingredientsIndex
    if (this.state.ingredientsList !== []) {
      ingredientsIndex = this.state.ingredientsList.map(ingredient => {
        return (
          <>
            <label>{ingredient}</label>
            <input
              type='checkbox'
              id={ingredient}
              name='ingredients'
              value={ingredient}
              onChange={this.onChangeHandler}
            />
          </>
        )
      })
    }
    return (
      <>
        <p>{this.state.selectedIngredients}</p>
        <div id='ingredients_index'>{ingredientsIndex}</div>
      </>
    )
  }
}
