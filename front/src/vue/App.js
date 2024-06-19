import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Login"
import PartAll from "./part/PartAll"

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/part" element={<PartAll/>}/>
    </Routes>
  </BrowserRouter>)
}

export default App