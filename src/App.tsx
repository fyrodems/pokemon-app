import Navbar from "./sections/Navbar"
import Wrapper from "./sections/Wrapper"
import Footer from "./sections/Footer"
import Background from "./components/Background"
import './scss/index.scss';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
      <div className="app">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App