import { useState } from "react";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [straatnaam, setStraatnaam] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [postcode, setPostcode] = useState("");
  const [plaatsnaam, setPlaatsnaam] = useState("");
  const [provincie, setProvincie] = useState("");
  const [geboorteDatum, setGeboortedatum] = useState(Date);
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");

  const register = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Account aanmaken</h1>
      <form onSubmit={(e) => register(e)} className="register-form">
        <input type="text" placeholder="Voornaam" value={voornaam} onChange={(e) => setVoornaam(e.target.value)} />
        <input type="text" placeholder="Achternaam" value={achternaam} onChange={(e) => setAchternaam(e.target.value)} />
        <div className="adress">
          <input type="text" placeholder="Straatnaam" value={straatnaam} onChange={(e) => setStraatnaam(e.target.value)} />
          <input type="text" placeholder="Huisnummer + toevoeging" value={huisnummer} onChange={(e) => setHuisnummer(e.target.value)} />
        </div>
        <div className="location">
          <input type="text" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
          <input type="text" placeholder="Plaatsnaam" value={plaatsnaam} onChange={(e) => setPlaatsnaam(e.target.value)} />
        </div>
        <input type="text" placeholder="Regio/Provincie" value={provincie} onChange={(e) => setProvincie(e.target.value)} />
        <label>Geboortedatum</label>
        <input type="date" placeholder="Geboortedatum" value={geboorteDatum} onChange={(e) => setGeboortedatum(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Wachtwoord" value={wachtwoord} onChange={(e) => setWachtwoord(e.target.value)} />
      </form>
      <button onClick={(e) => register(e)}>Account aanmaken</button>
    </>
  );
};

export default RegisterForm;
