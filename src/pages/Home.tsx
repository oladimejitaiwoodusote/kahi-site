import '../styles/Home.css';
import Home_1 from '../assets/Home 1.jpg';
import Home_2 from '../assets/Home 2.jpg';
import Home_3 from '../assets/Home 3.jpg';

import FeatureRow from '../components/FeatureRow';

function Home() {
  return (
    <div className="Home">
        <div className="Home_Image">
            <img src={Home_1} alt="Home_1"/>
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
                image={Home_2}
            />
            <FeatureRow
                title="DESIGNED AROUND YOU"
                text="More than a beautiful event, it should feel deeply personal.
                    From custom details to subtle gestures that make guests feel included, 
                    we focus on the elements that help tell your story."
                image={Home_3}
            />
        </div>
    </div>
  )
}

export default Home