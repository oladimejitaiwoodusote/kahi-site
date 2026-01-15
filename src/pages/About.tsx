import '../styles/About.css';
import About_1 from '../assets/About Us 1.jpg';
import useParallaxHeader from '../hooks/useParralaxHeader';

function About() {
  // useParallaxHeader({
  //   heroSelector: ".About_Image",
  // })

  return (
    <div className="About">
        <div className="About_Image">
            <img src={About_1} alt="About_1"/>
            <h1>MORE ABOUT US</h1>
        </div>
        <div className='About_Blurb'>
            <h2>About The Kahi Company.</h2>
            <p>
              The Kahi Company is an Event planning and creative design company known for transforming ordinary moments into unforgettable experiences. 
              Blending artistic vision with precise coordination, we specialize in crafting beautifully curated weddings and social celebrations that feel personal, intentional, 
              and deeply memorable.
            </p>
            <p>
              With a commitment to excellence, The Kahi Company approaches every event as a story waiting to be told merging aesthetics, ambiance, and seamless execution. 
              Our style is modern yet warm, elevated yet personal, focusing on experiences that reflect each client's individuality.
            </p>
            <p>
            Driven by passion and professionalism, The Kahi Company delivers events that don’t just look stunning, but feel thoughtful, emotional, and immersive. 
            Our promise is simple: to take your vision, refine it with creativity, and bring it to life with a level of detail that leaves lasting memories.
            </p>
        </div>
    </div>
  )
}

export default About