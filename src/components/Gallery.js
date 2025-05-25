import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos para la galería y las imágenes
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

// Estilos para el modal de la imagen ampliada
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index} onClick={() => openImage(image)}>
            <img src={image} alt={`Gallery Image ${index}`} />
          </ImageWrapper>
        ))}
      </GalleryContainer>

      {selectedImage && (
        <Modal onClick={closeImage}>
          <ModalContent>
            <img src={selectedImage} alt="Selected" />
            <CloseButton onClick={closeImage}>X</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
