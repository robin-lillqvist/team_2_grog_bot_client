import React, { Component } from "react";
import ShowIngredients from "./ShowIngredients";
import axios from "axios";

class SelectIngredients extends Component {
  state = {
    selectedIngredient: "Coca-Cola",
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
    let result = await axios.get(`/cocktails/${id}`);
    this.setState({
      selectedCocktail: result.data.drink
    });
  }

  render() {
    let cocktailIndex, renderSpecificCocktail;
    let cocktailDetails = this.state.selectedCocktail;

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

    if (cocktailDetails.id > 0) {
      debugger;
      renderSpecificCocktail = (
        <div key={cocktailDetails.id} id="cocktail-container">
          {cocktailDetails.name}
          {cocktailDetails.category}
          <img src={cocktailDetails.image} alt="Cocktail" />
          Ingredients:
          {cocktailDetails.ingredients.map(item => {
            return (
              <div key={cocktailDetails.id} id="ingredients-container">
                {item.name} {item.measure}
              </div>
            );
          })}
          Instructions: {cocktailDetails.instructions}
          Glass: {cocktailDetails.glass}
        </div>
      );
    }

    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
        {renderSpecificCocktail}
        <ul id="cocktail_list">{cocktailIndex}</ul>
      </>
    );
  }
}

export default SelectIngredients;
