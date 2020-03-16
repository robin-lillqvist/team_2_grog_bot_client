import React, { Component } from "react";
import axios from "axios";

class SelectAlcohol extends Component {
  state = {
    alcoholList: []
  };
  setAlcohol(event) {
    this.setState({
      selectedAlcohol: event.target.value
    });
  }

  async onSearchHandler() {
    let result = await axios.get(
      `/alcohols?country=Sverige&q=${this.state.selectedAlcohol}`
    );
    this.setState({
      alcoholList: result.data.alcohols
    });
  }
  render() {
    let alcoholIndex;
    if (this.state.alcoholList !== []) {
      alcoholIndex = this.state.alcoholList.map(alcohol => {
        return (
          <li key={alcohol.ProductId}>
            {alcohol.ProductNameBold} {alcohol.ProductNameThin}
            {alcohol.PriceText} kr
            {alcohol.VolumeText}
            <img src={alcohol.Thumbnail.ImageUrl} />
          </li>
        );
      });
    }
    return (
      <>
        <select
          key="alcohols"
          id="alcohol_selector"
          onChange={this.setAlcohol.bind(this)}
        >
          <option value="Vodka">Vodka</option>
          <option value="Gin">Gin</option>
          <option value="Whisky">Whisky</option>
          <option value="Mörk rom">Dark Rum</option>
          <option value="Ljus rom">Light Rum</option>
          <option value="Smaksatt sprit">Flavoured Liquor</option>
          <option value="Smaksatt vodka">Flavoured Vodka</option>
        </select>
        <button onClick={this.onSearchHandler.bind(this)}>Search</button>
        {alcoholIndex}
      </>
    );
  }
}
export default SelectAlcohol;
