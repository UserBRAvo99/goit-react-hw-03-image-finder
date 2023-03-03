import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import shortid from "shortid";


function ImageGallery({ img }) {
    console.log(img);
    return (
        <ul>
            {img.map(item => {
                return (
                    <ImageGalleryItem data={item} key={shortid()} />
                )
            })}
        </ul>
    )
}

export default ImageGallery