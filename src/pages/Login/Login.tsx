import LoginForm from "components/LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
