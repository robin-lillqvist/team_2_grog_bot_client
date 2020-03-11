import React, { Component } from 'react'
import axios from 'axios'

export default class ShowIngredients extends Component {
  state = {
    ingredientsList: []
  }

  componentDidMount () {
    axios.get('/ingredients').then(response => {
      debugger
      this.setState({
        ingredientsList: response.data.ingredients
      })
      debugger
    })
  }

  render () {
    let ingredientsIndex
    if (this.state.ingredientsList !== []){
      ingredientsIndex = this.state.ingredientsList.map(ingredient => {
        return <li id={ingredient}>{ingredient}</li>
      })
    }
    return <div id='ingredients_index'>{ingredientsIndex}</div>
  }
}
