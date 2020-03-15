import React, { Component } from "react";
import ShowIngredients from "./ShowIngredients";
import axios from "axios";

class SelectIngredients extends Component {
  state = {
    selectedIngredient: "",
    cocktailList: [],
    selectedCocktail: [],
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
      selectedCocktail: result.data.drink
    });
  }

  render() {
    let cocktailIndex;
    if (this.state.cocktailList !== {}) {
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
          <div key={cocktail.id} id="cocktail-container">
            {cocktail.name}
            {cocktail.category}
            <img src={cocktail.image} alt='Cocktail' />
            Ingredients:
            {cocktail.ingredients.map(item => {
              return (
                <div key={cocktail.id}>
                  {item.name} {item.measure}
                </div>
              );
            })}
            Instructions: {cocktail.instructions}
            Glass: {cocktail.glass}
          </div>
        );
      });
    }

    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
        {specificCocktail}
        <ul id="cocktail_list">{cocktailIndex}</ul>
      </>
    );
  }
}

export default SelectIngredients;
