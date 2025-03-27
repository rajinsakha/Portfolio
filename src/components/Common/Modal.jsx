import { motion, AnimatePresence } from "framer-motion";
import "./Common.css";
import { useState } from "react";

const Modal = ({ imgs, initialIndex, isOpen, setIsOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultipleImages = imgs.length > 1;

  const handleClose = () => {
    setIsOpen(false);
  };

  const goNext = () => {
    if (!hasMultipleImages) return;
    setCurrentIndex((prev) => (prev + 1) % imgs.length);
  };

  const goPrev = () => {
    if (!hasMultipleImages) return;
    setCurrentIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>

        <div className="modal-carousel">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.img
              key={currentIndex}
              src={imgs[currentIndex]}
              alt="modal-img"
              className="modal-image"
              custom={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {hasMultipleImages && (
            <>
              <motion.button
                className="carousel-button prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &#10094;
              </motion.button>
              <motion.button
                className="carousel-button next"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &#10095;
              </motion.button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
