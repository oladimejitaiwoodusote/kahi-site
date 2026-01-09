import '../styles/FeatureRow.css';


type FeatureRowProps = {
    title: string;
    text: string;
    image: string;
};

function FeatureRow({title, text, image}: FeatureRowProps) {
  return (
    <div className='FeatureRow'>
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