import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import shortid from "shortid";


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

export default ImageGallery