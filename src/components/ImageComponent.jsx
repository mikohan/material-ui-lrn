import React from 'react';
import ImageGallery from 'react-image-gallery';

import { images } from '../images';

function ImageComponent(props) {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageComponent;
