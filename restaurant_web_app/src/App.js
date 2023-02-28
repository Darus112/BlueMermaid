import Navbar from "./Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import BookTable from "./pages/BookTable"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App