import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./pages/Home"
import Nav from "./component/Nav"
import Architecture from "./pages/Architecture"
import History from "./pages/History"
import Details from "./pages/Details"

export default function App(){
  return (
    <>
    <Router>
      <Nav />
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/architecture" element={<Architecture />} />
     <Route path="/history" element={<History />} />
     <Route path="/details" element={<Details />} />
     
      </Routes>
    </Router>
    </>
  )
}