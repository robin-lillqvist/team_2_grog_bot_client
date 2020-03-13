import React, { Component } from "react";
import ShowIngredients from "./ShowIngredients";

export default class ShowIngredientsForm extends Component {
  state = {
    selectedIngredient: ''
  }

  setIngredient(event) {
    this.setState({
      selectedIngredient: event.target.value
    })
  }
  async submitHandler() {
    debugger;
  }

  render() {
    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)}/>
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
      </>
    );
  }
}
