import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Events from "./components/EventListing";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
      </Routes>
    </Router>
  )
}

export default App