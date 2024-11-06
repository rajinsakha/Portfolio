import './Common.css'


const Modal = ({ imgURL, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={handleClose}>
          &times;
        </button>
        <img src={imgURL} alt="modal-img" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
