import "./Landing.scss";
import Banner from "../../components/Banner/Banner";
import PlaatsTable from "../../components/PlaatsTable/PlaatsTable";
const plattegrond = require('../../assets/plattegrond.png');

function Landing() {
  return (
    <div className="landing-container">
      <Banner />
      <div className="plattegrond">
        <img src={plattegrond} alt="Camping de Maasvallei Plattegrond"/>
      </div>
      <PlaatsTable />
    </div>
  );
};

export default Landing;
