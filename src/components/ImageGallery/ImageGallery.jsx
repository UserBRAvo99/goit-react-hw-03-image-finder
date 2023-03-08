import shortid from "shortid";
import PropTypes from 'prop-types';

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";




function ImageGallery({ img }) {
    return (
        <ul className="ImageGallery">
            {img.map(item => {
                return (
                    <ImageGalleryItem data={item} key={shortid()} />
                )
            })}
        </ul>
    )
}

ImageGallery.propTypes = {
    img: PropTypes.array.isRequired
}

export default ImageGallery