import '../styles/Gallery.css';

import Gallery_1 from '../assets/Gallery 1.jpg';
import Gallery_2 from '../assets/Gallery 2.jpg';
import Gallery_3 from '../assets/Gallery 3.jpg';
import Gallery_4 from '../assets/Gallery 4.jpg';
import Gallery_5 from '../assets/Gallery 5.jpg';
import Gallery_6 from '../assets/Gallery 6.jpg';

const images = [
    Gallery_1,
    Gallery_2,
    Gallery_3,
    Gallery_4,
    Gallery_5,
    Gallery_6
]

function Gallery() {
  return (
    <div className="Gallery"> 
        <div>
            <h1>Previous Celebrations</h1>
            <p>A glimpse into the unforgettable moments we've curated.</p>
        </div>
        <div className="Gallery_Grid">
            {images.map((img, index) => {
                const row = Math.floor(index / 3);
                const position = index % 3;

                const isTall =
                    row % 2 === 0
                        ? position === 0 || position === 2
                        : position === 1;
                
                return (
                    <div
                        key={index}
                        className={`Gallery_Item ${isTall? "tall" : "short"}`}
                    >
                        <img src={img} alt="Event"/>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Gallery