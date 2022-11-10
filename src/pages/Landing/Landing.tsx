import "./Landing.scss";
import Banner from "../../components/Banner/Banner";
const img = require('../../assets/plattegrond.png');

function Landing() {
  return (
    <div className="landing-container">
      <Banner />
      <div className="plattegrond">
        <img src={img} alt="Camping de Maasvallei Plattegrond"/>
      </div>
      <div className="table-campingplaats">
        <h2>Campingplaatsen</h2>
      </div>
    </div>
  );
};

export default Landing;
