import React from 'react';
import background from '../../images/login_bg.jpg'

const Home = () => {
    const backGround = {
        backgroundImage:`url(${background})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:'100vh'
        // background-position: "static"
    }
  return (

    <div className='image' style={backGround} >
      
    </div>
  );
}

export default Home;
