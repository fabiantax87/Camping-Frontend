import "./Landing.scss";
import Banner from "../../components/Banner/Banner";
import PlaatsTable from "../../components/PlaatsTable/PlaatsTable";
import Footer from "../../components/Footer/Footer";
const plattegrond = require('../../assets/plattegrond.png');

function Landing() {
  return (
    <div className="landing-container">
      <Banner />
      <div className="plattegrond">
        <img src={plattegrond} alt="Camping de Maasvallei Plattegrond"/>
      </div>
      <PlaatsTable />
      <Footer />
    </div>
  );
};

export default Landing;
