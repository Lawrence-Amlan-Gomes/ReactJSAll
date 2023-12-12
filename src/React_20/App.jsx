import { useState } from "react";
import Mycomponent from "./Component/Mycomponent";

function App20() {
      const [show, setShow] = useState(true)
      return (
            <div className="app">
                  <div>{show && <Mycomponent/>}</div>
                  <p>
                        <button type="button" onClick={()=>{setShow((prevState) => !prevState)}}>
                              {show ? "Hide Post" : "Show Post"}
                        </button>
                  </p>
                  
            </div>
            
      );
     
}

export default App20
