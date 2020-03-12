import React, { Component } from 'react'
import axios from 'axios'

export default class ShowIngredients extends Component {
  state = {
    ingredientsList: []
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
    if (this.state.ingredientsList !== []){
      ingredientsIndex = this.state.ingredientsList.map(ingredient => {
        return (
        <>
          <label>{ingredient}</label>
        <input type="checkbox" id={ingredient} />          
        </>
        )
      })
    }
    return <div id='ingredients_index'>{ingredientsIndex}</div>
  }
}
