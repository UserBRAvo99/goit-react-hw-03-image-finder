import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import ModalImg from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    modalOpen: false,
    largeImage: '',
  };
  OnClickGalleryItem = largeImageItem => {
    this.setState({ largeImage: largeImageItem, modalOpen: true });
  };

  //   ModalToggle = () => {
  //     this.setState(({ modalOpen }) => ({
  //       modalOpen: !modalOpen,
  //     }));
  //   };

  ModalClose = event => {
    if (event.target.className === 'Overlay') {
      this.setState({ modalOpen: false });
    }
  };

  render() {
    const { modalOpen, largeImage } = this.state;

    return (
      <>
        <ul className="ImageGallery">
          {this.props.img.map(item => {
            return (
              <ImageGalleryItem
                onClick={this.OnClickGalleryItem}
                data={item}
                key={shortid()}
              />
            );
          })}
        </ul>
        {modalOpen && (
          <ModalImg searchLargeImage={largeImage} onClick={this.ModalClose} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  img: PropTypes.array.isRequired,
};

export default ImageGallery;
