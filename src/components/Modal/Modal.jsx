function ModalImg({ searchLargeImage, onClick }) {
  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={searchLargeImage} alt="" />
      </div>
    </div>
  );
}
export default ModalImg;
