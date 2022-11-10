import "./Footer.scss";

function Footer() {
    return (
    <div className="footer">
        <div className="footer-grid">
            <div className="grid">
                <h2>Contact</h2>
                <p>Telefoon Camping: 012345678</p>
                <p>Telefoon Bistro: 012345678</p>
                <p>Email: campingdemaasvallei@info.nl</p>
            </div>
            <div className="grid">
                <h2>Adress</h2>
                <p>Veerweg 8</p>
                <p>5441 PL Oeffelt</p>
                <p>Noord-Brabant</p>
            </div>
            <div className="grid">
                <h2>FAQ</h2>
                <p>Veel Gestelde Vragen</p>
                <p>Chat Live met de infodesk</p>
            </div>
        </div>
    </div>
    );
  };
  
  export default Footer;