import React, { Component } from "react";

import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

import ImageResult from "../imageResult/ImageResult";
import LatestImg from "../latest/LatestImg";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://cors-anywhere.herokuapp.com/https://pixabay.com/api",
    apiKey: "11051134-e71bfc2a2bee8fa87bc79ad6c",
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(response => this.setState({ images: response.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  amountChange = (e, index, value) => {
    this.setState({ amount: value });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="search for images"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.amountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResult images={this.state.images} />
        ) : (
          <LatestImg />
        )}
      </div>
    );
  }
}

export default Search;
