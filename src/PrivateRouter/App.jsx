import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Homepage from "./Component/Homepage";
import Login from "./Component/Login";
import PrivateOutlet from "./Component/PrivateOutlet";
import Dashboard from "./Component/DashBoard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


