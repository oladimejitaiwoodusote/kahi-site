import '../styles/Gallery.css';

import Gallery_1 from '../assets/Gallery 1.jpg';
import Gallery_2 from '../assets/Gallery 2.jpg';
import Gallery_3 from '../assets/Gallery 3.jpg';
import Gallery_4 from '../assets/Gallery 4.jpg';
import Gallery_5 from '../assets/Gallery 5.jpg';
import Gallery_6 from '../assets/Gallery 6.jpg';
import Gallery_7 from '../assets/Gallery 7.jpg';
import Gallery_8 from '../assets/Gallery 8.jpg';
import Gallery_9 from '../assets/Gallery 9.jpg';
import Gallery_10 from '../assets/Gallery 10.jpg';
import Gallery_11 from '../assets/Gallery 11.jpg';
import Gallery_12 from '../assets/Gallery 12.jpg';
import Gallery_13 from '../assets/Gallery 13.jpg';
import Gallery_14 from '../assets/Gallery 14.jpg';
import Gallery_15 from '../assets/Gallery 15.jpg';
import Gallery_16 from '../assets/Gallery 16.jpg';
import Gallery_17 from '../assets/Gallery 17.jpg';
import Gallery_18 from '../assets/Gallery 18.jpg';
import Gallery_19 from '../assets/Gallery 19.jpg';
import Gallery_20 from '../assets/Gallery 20.jpg';
import Gallery_21 from '../assets/Gallery 21.jpg';
import Gallery_22 from '../assets/Gallery 22.jpg';
import Gallery_23 from '../assets/Gallery 23.jpg';
import Gallery_24 from '../assets/Gallery 24.jpg';
import Gallery_25 from '../assets/Gallery 25.jpg';
import Gallery_26 from '../assets/Gallery 26.jpg';
import Gallery_27 from '../assets/Gallery 27.jpg';
import Gallery_28 from '../assets/Gallery 28.jpg';
import Gallery_29 from '../assets/Gallery 29.jpg';
import Gallery_30 from '../assets/Gallery 30.jpg';
import Gallery_31 from '../assets/Gallery 31.jpg';
import Gallery_32 from '../assets/Gallery 32.jpg';
import Gallery_33 from '../assets/Gallery 33.jpg';
import Gallery_34 from '../assets/Gallery 34.jpg';
import Gallery_35 from '../assets/Gallery 35.jpg';
import Gallery_36 from '../assets/Gallery 36.jpg';
import Gallery_37 from '../assets/Gallery 37.jpg';
import Gallery_38 from '../assets/Gallery 38.jpg';
import Gallery_39 from '../assets/Gallery 39.jpg';
import Gallery_40 from '../assets/Gallery 40.jpg';
import Gallery_41 from '../assets/Gallery 41.jpg';
import Gallery_42 from '../assets/Gallery 42.jpg';
import Gallery_43 from '../assets/Gallery 43.jpg';
import Gallery_44 from '../assets/Gallery 44.jpg';
import Gallery_45 from '../assets/Gallery 45.jpg';
import Gallery_46 from '../assets/Gallery 46.jpg';

function Gallery() {
  const originalImages = [
    Gallery_1,
    Gallery_2,
    Gallery_3,
    Gallery_4,
    Gallery_5,
    Gallery_6,
    Gallery_7,
    Gallery_8,
    Gallery_9,
    Gallery_10,
    Gallery_11,
    Gallery_12,
    Gallery_13,
    Gallery_14,
    Gallery_15,
    Gallery_16,
    Gallery_17,
    Gallery_18,
    Gallery_19,
    Gallery_20,
    Gallery_21,
    Gallery_22,
    Gallery_23,
    Gallery_24,
    Gallery_25,
    Gallery_26,
    Gallery_27,
    Gallery_28,
    Gallery_29,
    Gallery_30,
    Gallery_31,
    Gallery_32,
    Gallery_33,
    Gallery_34,
    Gallery_35,
    Gallery_36,
    Gallery_37,
    Gallery_38,
    Gallery_39,
    Gallery_39,
    Gallery_40,
    Gallery_41,
    Gallery_42,
    Gallery_43,
    Gallery_44,
    Gallery_45,
    Gallery_46
  ];

  function rowFirstToColumnFirst(images: any[], columns = 3) {
    const colImages: any[] = Array.from({ length: columns }, () => []);
    const rows = Math.ceil(images.length / columns);
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const idx = row * columns + col;
        if (images[idx]) {
          colImages[col].push(images[idx]);
        }
      }
    }
  
    // flatten the columns for CSS columns (top-to-bottom)
    return colImages.flat();
  }
  
  const reorderedImages = rowFirstToColumnFirst(originalImages, 3);
  
  
  
  return (
    <div className="Gallery">
      <div className="Gallery_Header">
        <h1>Previous Celebrations</h1>
        <p>A glimpse into the unforgettable moments we've curated.</p>
      </div>

      <div className="Gallery_Grid">
        {reorderedImages.map((img, index) => (
          <div key={index} className="Gallery_Item">
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

