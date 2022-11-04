import Layout from "pages/Layout/Layout";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
