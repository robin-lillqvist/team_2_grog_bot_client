import React, { Component } from 'react'
import ShowIngredients from './ShowIngredients'

export default class ShowIngredientsForm extends Component {

  render () {
    const submitFormHandler = async e => {
        debugger
    }

    return (
    <form onSubmit={submitFormHandler} id="register-form">
    <ShowIngredients/>
    <button>Submit</button>
    </form>
    )
  }
}
