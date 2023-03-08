
import { Component } from "react";
import { getImgs } from "./fetch";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ReadMoreBtn from "./ReadMoreBtn";



class Wrapper extends Component {
  state = {
    data: [],
    totalHits: 0,
    search: '',
    page: 1,
    perPage: 20,
    modalGallery: false,
    loader: false
  }
  // componentDidMount() {

  // }

  componentDidUpdate(prevProps, prevState) {

    if ((prevState.page !== this.state.page) || (prevState.search !== this.state.search)) {
      this.getData()
    }
    
  }
  
  
  getData = async () => {
    try {
      const { data: { hits, totalHits } } = await getImgs(this.state.search, this.state.page, this.state.perPage);
      this.setState(prev => ({
        data: [...prev.data, ...hits],
        totalHits: totalHits
      }))
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  formOnSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const inputValue = form.elements.search.value.toLowerCase().trim()
    this.setState({ search: inputValue, data: [] ,page: 1, perPage: 20, totalHits: 0})
  }

  loadMoreBtnClick = () => {
    this.setState(prev => ({ page: prev.page + 1}))
  }


  render() {
    const arrImg = this.state.data
    const totalImg = this.state.totalHits
    console.log(totalImg);
    return (
      <div className="App">
        <Searchbar onSubmit={this.formOnSubmit}/>
        <ImageGallery img={arrImg} />
        {
          arrImg.length > 0 && arrImg.length < totalImg &&  (
            <ReadMoreBtn title="Load More" event={this.loadMoreBtnClick} />
          )
        }
      </div>
  )
  };
};

export default Wrapper