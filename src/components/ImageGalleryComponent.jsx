// src/components/ImageGalleryComponent.jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';




const ImageGalleryComponent = () => {
    const images = [
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image3,
            thumbnail: image3,
        },
    ];

    return (
        <div className="image-gallery-wrapper">
            <ImageGallery items={images} />
        </div>
    );
};

export default ImageGalleryComponent;
