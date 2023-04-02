import Navbar from "./sections/Navbar"
// import Wrapper from "./sections/Wrapper"
import Footer from "./sections/Footer"
import Background from "./components/Background"
import Search from "./pages/Search"
import './scss/index.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyList from "./pages/MyList"
import About from "./pages/About"
import Compare from "./pages/Compare"
import Pokemon from "./pages/Pokemon"

const App = () => {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to='pokemon/1' />} />
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<MyList />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
        {/* <Wrapper /> */}
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App