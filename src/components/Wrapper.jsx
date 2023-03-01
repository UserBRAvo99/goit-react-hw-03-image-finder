
import { Component } from "react";
// // // import axios from "axios";

import Searchbar from "./Searchbar";


class Wrapper extends Component {
  state = {
    data: [],
    search: '',
    modalGallery: false,
    loader: false,
    }
    inputChange = (event) => {
        const {value} = event.target
        this.setState({ search: value })
        
     }
    formOnSubmit = (event) => {
        event.preventDefault()
    }
    render() {
      return (
        <div className="App">
          <Searchbar input={this.inputChange} form={this.formOnSubmit}  />
        </div>
    )
  };
};

export default Wrapper