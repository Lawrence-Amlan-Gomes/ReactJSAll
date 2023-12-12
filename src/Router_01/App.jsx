import { Route, Routes, Navigate} from "react-router-dom";
import Hello from "./Component/Hello";
import Post from "./Component/Post";
import Posts from "./Component/Posts";
import Header from "./Component/Header";
function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/hello" />}/>
          <Route path="/hello/*" element={<Hello />}>
            <Route path="world" element={<p>This is world!</p>}/>
          </Route>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/posts/:postId" element={<Post />}/>
        </Routes>
      </div>
  )
}

export default App
