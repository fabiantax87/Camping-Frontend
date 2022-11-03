import Layout from "pages/Layout/Layout";
import Register from "pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
