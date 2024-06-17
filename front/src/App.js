import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./page/Login"
import Part from "./page/Part"

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/part" element={<Part/>}/>
    </Routes>
  </BrowserRouter>)
}

export default App