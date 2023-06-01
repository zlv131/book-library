import './App.css'
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import DetailsBook from "./pages/details-book/DetailsBook.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book" element={<DetailsBook/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
