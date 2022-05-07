
import './App.css';
import NavBar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Experiance from './components/Experience/Experience';
function App() {
  
  return (
    <>
      
      <NavBar />
      <Home />
      <About />
      <Experiance/>
    </>
  );
}

export default App;
