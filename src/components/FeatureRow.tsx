import '../styles/FeatureRow.css';


type FeatureRowProps = {
    title: string;
    text: string;
    image: string;
    reverse?: boolean;
};

function FeatureRow({title, text, image, reverse = false}: FeatureRowProps) {
  return (
    <div className={`FeatureRow ${reverse ? 'FeatureRow--reverse' : ''}`}>
        <div className='FeatureRow_Text'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <div className='FeatureRow_Image'>
            <img src={image} alt={title}/>
        </div>
    </div>
  );
}

export default FeatureRow