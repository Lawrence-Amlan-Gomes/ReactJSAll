import ClickCounter from "./HOC/ClickCounter"
import HoverCounter from "./HOC/HoverCounter"

// We avoid Props Drilling Problem by using Higher Order Component But Can't Solve it

export default function App13() {
  return (
        <div>
          <ClickCounter/>
          <HoverCounter/>
  
        </div>
        
  )
}
