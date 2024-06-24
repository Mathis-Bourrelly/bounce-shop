import './App.css'
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Login from "./Login"
import PartAll from "./part/PartAll"
import PartNew from "./part/PartNew";
import PartDetail from "./part/PartDetail";

function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/part" element={<PartAll/>}/>
      <Route path="/part/new" element={<PartNew/>}/>
      <Route path="/part/:partID" element={<PartDetail/>}/>
    </Routes>
  </BrowserRouter>)
}

export default App