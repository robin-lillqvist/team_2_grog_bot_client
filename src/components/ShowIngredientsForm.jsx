import React, { Component } from 'react'
import ShowIngredients from './ShowIngredients'

export default class ShowIngredientsForm extends Component {
  
  async submitHandler() {
    debugger
  }
  
  render () {
    

    return (
        <>
          <ShowIngredients />
          <button onClick={this.submitHandler.bind(this)}>Submit</button>
        </>

  
    )
  }
}
