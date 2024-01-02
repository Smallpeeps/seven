import Navbar from "./Navbar"
import Agenda from "./pages/Agenda"
import Home from "./pages/Home"
import Reservation from "./pages/Reservation"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          
         </>
    )
}

export default App;
