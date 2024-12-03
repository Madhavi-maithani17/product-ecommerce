import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProductCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {
            images && images.length > 0 && images.map((productImage, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                            src={productImage.replace(/^[\[\\"']+|[\]\\"']+$|\\\"/g, '')}
                            alt={`product image ${index}`}
                            />
                </Carousel.Item>
        ))}
      
    </Carousel>
  );
}

export default ProductCarousel;