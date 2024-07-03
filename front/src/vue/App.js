import './App.css'
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Login from "./Login"
import PartAll from "./part/PartAll"
import PartNew from "./part/PartNew";
import PartDetail from "./part/PartDetail";
import OperationNew from "./operation/OperationNew";
import OperationAll from "./operation/OperationAll";

function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/part" element={<PartAll/>}/>
      <Route path="/part/new" element={<PartNew/>}/>
      <Route path="/part/:partID" element={<PartDetail/>}/>

      <Route path="/operation" element={<OperationAll/>}/>
      <Route path="/operation/new" element={<OperationNew/>}/>
      <Route path="/operation/:operationID" element={<PartDetail/>}/>
    </Routes>
  </BrowserRouter>)
}

export default App