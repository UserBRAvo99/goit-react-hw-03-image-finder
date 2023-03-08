import PropTypes from 'prop-types';

function ImageGalleryItem({data}) {
    return (
        <li className="ImageGalleryItem" id={data.id}>
            <img src={data.webformatURL} alt={data.tags} className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired
    })
}

export default ImageGalleryItem