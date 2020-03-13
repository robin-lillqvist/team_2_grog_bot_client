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
