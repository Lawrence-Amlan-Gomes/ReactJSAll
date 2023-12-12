import ClickCounter from "./HOC/ClickCounter"
import HoverCounter from "./HOC/HoverCounter"
import Counter from "./HOC/Counter"
export default function App14() {
  return (
        <div>
          
          <Counter>
                {(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
          </Counter>
          <Counter>
                {(count,incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}/>)}
          </Counter>
          
  
        </div>
        
  )
}
