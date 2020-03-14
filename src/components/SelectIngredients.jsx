import React, { Component } from "react";
import ShowIngredients from "./ShowIngredients";
import axios from "axios";

class SelectIngredients extends Component {
  state = {
    selectedIngredient: "",
    cocktailList: []
  };

  setIngredient(event) {
    this.setState({
      selectedIngredient: event.target.value
    });
  }

  async submitHandler() {
    let result = await axios.get(
      `/cocktails?q=${this.state.selectedIngredient}`
    );
    this.setState({
      cocktailList: result.data.drinks
    });
  }

  render() {
    let cocktailIndex;
    if (this.state.cocktailList !== []) {
      cocktailIndex = this.state.cocktailList.map(cocktail => {
        return (
          <li>
            <button key={cocktail.idDrink}>{cocktail.strDrink}</button>
          </li>
        );
      });
    }
    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
        <ul id="cocktail_list">{cocktailIndex}</ul>
      </>
    );
  }
}

export default SelectIngredients;
