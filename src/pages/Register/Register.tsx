import RegisterForm from "components/RegisterForm/RegisterForm";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-content">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
