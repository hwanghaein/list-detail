import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
<BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
