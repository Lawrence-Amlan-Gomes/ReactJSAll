import  ClockList  from "./Components/ClockList";

export default function App8() {
  const list1 = [1,1,2,2,3,4,4]
  return (
      <div>
        <div><ClockList q={list1}/></div>
      </div>
  )
}

