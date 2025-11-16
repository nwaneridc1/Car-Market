import React from 'react';
import { assets } from '../Assets/assets';

const Background = ({ playStatus, heroCount }) => {
  const commonClasses = "absolute top-0 left-0 w-full h-[90vh] sm:h-screen lg:h-screen md:h-screen object-cover z-[-10]";

  if (playStatus) {
    return (
      <video className={commonClasses} autoPlay loop muted>
        <source src={assets.auto} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={assets.car} className={commonClasses} alt="Background 1" />;
  } else if (heroCount === 1) {
    return <img src={assets.car2} className={commonClasses} alt="Background 2" />;
  } else if (heroCount === 2) {
    return <img src={assets.car3} className={commonClasses} alt="Background 3" />;
  }
};

export default Background;
