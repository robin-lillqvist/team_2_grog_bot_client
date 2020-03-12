import React, { Component } from 'react'
import ShowIngredients from './ShowIngredients'

export default class ShowIngredientsForm extends Component {
  render () {
    const submitFormHandler = async e => {
      debugger
    }

    return (
      <form id='register-form' onSubmit={submitFormHandler}>
        <fieldset>
          <ShowIngredients />
          <button>Submit</button>
        </fieldset>
      </form>
    )
  }
}
