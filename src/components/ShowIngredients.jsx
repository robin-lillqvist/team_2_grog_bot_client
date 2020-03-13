import React, { Component } from "react";
import axios from "axios";

export default class ShowIngredients extends Component {
  state = {
    ingredientsList: [],
    selectedIngredients: []
  };

  onChangeHandler = event => {
    let updatedCheckbox = event.target.value;
    let selected = this.state.selectedIngredients;
    console.log(selected);
    let isInArray = selected.includes(updatedCheckbox);
    let ingredient1 = [];
    ingredient1.push(updatedCheckbox);
    this.setState({ selectedIngredients: ingredient1 });
    console.log(isInArray);
    debugger;
  };

  componentDidMount() {
    axios.get("/ingredients").then(response => {
      this.setState({
        ingredientsList: response.data.ingredients
      });
    });
  }
  render() {
    let ingredientsOptions;
    if (this.state.ingredientsList !== []) {
      ingredientsOptions = this.state.ingredientsList.map(ingredient => {
        return <option key={ingredient} value={ingredient}>{ingredient}</option>;
      });
    }
    return (
      <>
        {/* <p>{this.state.selectedIngredients}</p> */}
        {/* <div id="ingredients_index">{igredientsIndex}</div> */}
        <select name="" id="ingredients_index">
          {ingredientsOptions}
        </select>
      </>
    );
  }
}
