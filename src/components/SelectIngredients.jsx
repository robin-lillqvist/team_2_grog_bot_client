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
    let result = await axios.get(`/cocktails?q=${this.state.selectedIngredient}`)
    debugger
    this.setState({
      cocktailList: result.data.drinks[0].strDrink
    })
  }



  render() {
    // let cocktailIndex;
    // if (this.state.cocktailList !== []) {
    //   cocktailIndex = this.state.cocktailList.map(cocktail => {
    //     return (
    //       <ul id="cocktail_index">
    //         <li>{cocktail}</li>
    //       </ul>
    //     )
    //   })
    // }
    return (
      <>
        <ShowIngredients setIngredient={this.setIngredient.bind(this)} />
        <button onClick={this.submitHandler.bind(this)}>Submit</button>
        {/* {cocktailIndex} */}
      </>
    );
  }
}

export default SelectIngredients;
