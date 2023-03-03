
import { Component } from "react";
import { getImgs } from "./fetch";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";



class Wrapper extends Component {
  state = {
    data: [],
    search: '',
    page: 1,
    modalGallery: false,
    loader: false,
  }
  
  inputChange = (event) => {
      const {value} = event.target
    this.setState({ search: value })
  }
  
  getData = async () => {
    try {
      const { data: { hits } } = await getImgs(this.state.search, this.state.page)
      this.setState({ data: hits })
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  formOnSubmit = (event) => {
    event.preventDefault()

    this.getData()
    // console.log(this.state.data);
    
    // getImgs().then(res => {
    //   this.setState({ data: res.data.hits });
    //   console.log(res);
    // }).catch({})
  }

  componentDidMount() {

  }

  componentDidUpdate() {
  }

  render() {
    const arrImg = this.state.data
    return (
      <div className="App">
        <Searchbar input={this.inputChange} form={this.formOnSubmit} />
        <ImageGallery img={arrImg} />
      </div>
  )
  };
};

export default Wrapper