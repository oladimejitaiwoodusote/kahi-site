import '../styles/Services.css';
import FeatureRow from '../components/FeatureRow';
import Services_1 from '../assets/Services 1.jpg';
import Services_2 from '../assets/Services 2.jpg';
import Services_3 from '../assets/Services 3.jpg';
import Services_4 from '../assets/Services 4.jpg';
import Services_5 from '../assets/Services 5.jpg';
import Services_6 from '../assets/Services 6.jpg';
import Services_7 from '../assets/Services 7.jpg';
import Services_8 from '../assets/Services 8.jpg';
import Services_9 from '../assets/Services 9.jpg';
import useParallaxHeader from '../hooks/useParralaxHeader';


function Services() {
    useParallaxHeader({
        heroSelector: ".Services_Image",
    })

  return (
    <div className='Services'>
        <div className='Services_Image'>
            <img src={Services_1} alt="Services_1"/>
            <h1>OUR SERVICES</h1>
        </div>
        <div className='Services_Cards'>
            <FeatureRow
                title="FULL SERVICE EVENT PLANNING & COORDINATION"
                text="Comprehensive planning for all event types , weddings, social celebrations,
                private milestones, and corporate gatherings. From concept creation to
                vendor management, timelines, logistics, and on-the-day coordination, we
                deliver seamless and beautifully executed experiences for every occasion."
                image={Services_2}
            />
            <FeatureRow
                title="EVENT DESIGN & CREATIVE STYLING"
                text="Custom décor concepts, floral design, spatial layouts, colour palettes, and
                ambiance styling that elevate the visual identity of your event."
                image={Services_3}
                reverse
            />
            <FeatureRow
                title="VENDOR SOURCING & MANAGEMENT"
                text="Curating and coordinating trusted vendors from décor and catering to
                photography and entertainment ensuring consistent quality and smooth
                collaboration for all vendors."
                image={Services_4}                
            />
            <FeatureRow
                title="ON-SITE COORDINATION"
                text="End-to-end event day management, guest flow, timeline execution, vendor
                supervision, and real-time problem solving for a flawless experience."
                image={Services_5} 
                reverse               
            />
            <FeatureRow
                title="CONCEPT DEVELOPMENT & THEME CREATION"
                text="Thoughtfully crafted themes, mood boards, and creative storytelling that
                bring your vision to life with clarity and personality."
                image={Services_6} 
            />
            <FeatureRow
                title="BUDGET PLANNING & ADVISORY"
                text="Smart financial guidance with detailed breakdowns, budget optimization,
                and tailored recommendations to help maximize value without
                compromising aesthetics."
                image={Services_7} 
                reverse
            />
            <FeatureRow
                title="GUEST EXPERIENCE MANAGEMENT"
                text="Hospitality focused support including guest flow, seating, gifting, and
                comfort management to ensure a warm, immersive experience for attendees."
                image={Services_8} 
            />
            <FeatureRow
                title="GIFT CURATION & PRESENTATION"
                text="Bespoke welcome packages, bridal party gifts, corporate gifting, and event
                favors styled to match your theme and leave lasting impressions."
                image={Services_9} 
                reverse
            />

        </div>
    </div>
  )
}

export default Services