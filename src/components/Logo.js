import Tilt from 'react-parallax-tilt';
import './Logo.scss';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.1}
      gyroscope={true}
    >
      <div className="inner-element">
        <div>FaceAI</div>
        <div>👀</div>
      </div>
    </Tilt>
        </div>
    );
}


export default Logo;