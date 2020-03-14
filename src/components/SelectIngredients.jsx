import React, { Component } from "react";
import ShowIngredients from "./ShowIngredients";
import axios from "axios";

class SelectIngredients extends Component {
  state = {
    selectedIngredient: "",
    cocktailList: [],
    selectedCocktail: []
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

  async getDetails(event) {
    let id = event.target.dataset.id;
    debugger;
    let result = await axios.get(`/cocktails/${id}`);
    debugger;
    this.setState({
      selectedCocktail: result.data.drinks
    });
  }

  render() {
    let cocktailIndex;
    if (this.state.cocktailList !== []) {
      cocktailIndex = this.state.cocktailList.map(cocktail => {
        return (
          <li>
            <button
              key={cocktail.idDrink}
              data-id={cocktail.idDrink}
              onClick={this.getDetails.bind(this)}
            >
              {cocktail.strDrink}
            </button>
          </li>
        );
      });
    }

    let specificCocktail;
    if (this.state.selectedCocktail !== []) {
      specificCocktail = this.state.selectedCocktail.map(cocktail => {
        return (
          <>
          <h2 id="cocktail_header"> {cocktail.strDrink} </h2>
          <h4 id="cocktail_category">{cocktail.strCategory}</h4>
          </>
        ) 

      });
    }

    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
        <ul id="cocktail_list">{cocktailIndex}</ul>
        {specificCocktail}
      </>
    );
  }
}

export default SelectIngredients;
