
import ComponentA from "./Component/ComponentA"
import counterContext from "./Component/ReactContext"
import { useReducer } from "react"

const initialState = 0
      const reducer = (state, action) => {
            switch (action) {
                  case "increment":
                        return state + 1
                  case "decrement":
                        return state - 1 
                  default:
                        return state
          }
      }

function App23_2() {
      const [Count, dispatch] = useReducer(reducer, initialState);
      return (
            <div className="app">  
                  <div>Counter_1 - {Count}</div><br /><br />
                  <counterContext.Provider value={{countDispatch: dispatch}}>
                        <ComponentA/>
                  </counterContext.Provider>  
            </div>
            
      );
     
}

export default App23_2
