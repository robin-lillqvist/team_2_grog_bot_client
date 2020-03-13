import React, { Component } from "react";
import ShowIngredients from "./ShowIngredients";

class SelectIngredients extends Component {
  state = {
    selectedIngredient: ""
  };

  setIngredient(event) {
    this.setState({
      selectedIngredient: event.target.value
    });
  }

  submitHandler() {
    // This is where the request will be sent to the backend.
  }

  render() {
    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
      </>
    );
  }
}

export default SelectIngredients;
