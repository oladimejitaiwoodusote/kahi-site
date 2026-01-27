import { useEffect } from 'react';
import '../styles/Home.css';
import Home_4 from '../assets/Home 4.jpeg';
import Home_5 from '../assets/Home 5.jpeg';
import Home_6 from '../assets/Home 6.jpeg';

import FeatureRow from '../components/FeatureRow';
import useParallaxHeader from '../hooks/useParralaxHeader';



function Home() {    
    useParallaxHeader({
        heroSelector: ".Home_Image",
    });

    useEffect(() => {
        document.title = "The Kahi Company"
    })

  return (
    <div className="Home">
        <div className="Home_Image">
            <img src={Home_4} alt="Home_1"/>
        </div>
        <div className='Home_Blurb'>
            <h2>We are The Kahi Company.</h2>
            <p>
            The Kahi Company is a creative event planning and design studio specializing in beautifully curated weddings and social celebrations. 
            Known for transforming meaningful moments into unforgettable experiences, we blend artistic vision with thoughtful coordination to create events that feel personal
            , intentional, and seamlessly executed. Inspired by each client's unique story, our approach is collaborative and detail driven, balancing modern elegance with warmth and emotion. 
            From concept to completion, we manage every detail with care to deliver events that are not only visually stunning, but effortless, immersive, and truly memorable.
            </p>
        </div>
        <div className='Home_Cards'>
            <FeatureRow
                title="QUITELY REFINED"
                text="We craft bespoke experiences rooted in intention and collaboration. 
                    Each element is thoughtfully considered to create a cohesive, elegant whole. 
                    Because meaningful design lives in the details."
                image={Home_5}
            />
            <FeatureRow
                title="DESIGNED AROUND YOU"
                text="More than a beautiful event, it should feel deeply personal.
                    From custom details to subtle gestures that make guests feel included, 
                    we focus on the elements that help tell your story."
                image={Home_6}
                reverse
            />
        </div>
    </div>
  )
}

export default Home