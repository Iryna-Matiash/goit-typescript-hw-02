import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import type { Image } from '../../types';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description || 'Image'}
        className={styles.image}
      />
      <p className={styles.author}>Photo by {image.user.name}</p>
    </Modal>
  );
};

export default ImageModal;
