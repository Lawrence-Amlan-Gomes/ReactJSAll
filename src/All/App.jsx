import { Route, Routes, Navigate} from "react-router-dom";
import Header from "./Component/Header";
import "../All/Styles/global.css";
import Home from "./Component/Home";
import App4 from "../React_1_4/App";
import App5 from "../React_5/App";
import App6 from "../React_6/App";
import App7 from "../React_7/App";
import App8 from "../React_8/App";
import App9_10 from "../React_9_10/App";
import App11 from "../React_11/App";
import App12 from "../React_12/App";
import App13 from "../React_13/App";
import App14 from "../React_14/App";
import App15_16 from "../React_15_16/App";
import App17_1 from "../React_17_1/App";
import App17_2 from "../React_17_2/App";
import App18_19 from "../React_18_19/App";
import App20 from "../React_20/App";
import App21 from "../React_21/App";
import App22 from "../React_22/App";
import App23_1 from "../React_23_1/App";
import App23_2 from "../React_23_2/App";
import App23_3 from "../React_23_3/App";
import App24 from "../React_24/App";
import App25 from "../React_25/App";


function App() {
  return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <br></br>
        <hr></hr>
        <div className="bodyPart">
          <Routes>
            <Route path="/" element={<Navigate to="/hello" />}/>
            <Route path="/hello" element={<Home />}/>
            <Route path="/app4" element={<App4 />}/>
            <Route path="/app5" element={<App5 />}/>
            <Route path="/app6" element={<App6 />}/>
            <Route path="/app7" element={<App7 />}/>
            <Route path="/app8" element={<App8 />}/>
            <Route path="/app9_10" element={<App9_10 />}/>
            <Route path="/app11" element={<App11 />}/>
            <Route path="/app12" element={<App12 />}/>
            <Route path="/app13" element={<App13 />}/>
            <Route path="/app14" element={<App14 />}/>
            <Route path="/app15_16" element={<App15_16 />}/>
            <Route path="/app17_1" element={<App17_1 />}/>
            <Route path="/app17_2" element={<App17_2 />}/>
            <Route path="/app18_19" element={<App18_19 />}/>
            <Route path="/app20" element={<App20 />}/>
            <Route path="/app21" element={<App21 />}/>
            <Route path="/app22" element={<App22 />}/>
            <Route path="/app23_1" element={<App23_1 />}/>
            <Route path="/app23_2" element={<App23_2 />}/>
            <Route path="/app23_3" element={<App23_3 />}/>
            <Route path="/app24" element={<App24 />}/>
            <Route path="/app25" element={<App25 />}/>
          </Routes>
        </div>
        <div className="footer">
        </div>
      </div>
  )
}

export default App
