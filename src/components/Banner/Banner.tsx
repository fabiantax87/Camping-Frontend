import "./Banner.scss";
const banner = require('../../assets/banner.png');

function Banner() {
    return (
    <div className="banner">
        <img src={banner} alt="Camping de Maasvallei Plattegrond"/>
        <div className="banner-text">
            <h1>Droom weg in de bosrijke omgeving!</h1>
            <p>Camping de Maasvallei voorziet u van een relaxt stukje natuur</p>
            <button>Reserveer Nu!</button>
        </div>
    </div>
    );
  };
  
  export default Banner;