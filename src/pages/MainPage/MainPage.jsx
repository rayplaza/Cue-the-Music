import React from "react";
import "./MainPage.css";
import Background from '../../img/Musicforfilm.jpg';
import Logo from '../../img/logotransback.png';

var sectionStyle = {
  width: "100%",
  height: "93vh",
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}


const MainPage = props => {
  return (
    <section style={sectionStyle}>
      <img className="logo" src={Logo} alt="the logo" />
    </section>
  )
};

export default MainPage;
