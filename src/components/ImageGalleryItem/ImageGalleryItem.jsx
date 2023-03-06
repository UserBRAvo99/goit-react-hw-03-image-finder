

function ImageGalleryItem({data}) {
    return (
        <li className="ImageGalleryItem" id={data.id}>
            <img src={data.webformatURL} alt={data.tags} className="ImageGalleryItem-image" />
        </li>
    )
}

export default ImageGalleryItem