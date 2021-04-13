import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Journal from './components/Journal';
import Testimonial from './components/Testimonial';
import Skills from './components/Skills';
import Service from './components/Service';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Bannar from './components/Bannar';
import Nav from './components/Nav';

function App() {
  return (
    <div>
     
        <Home/>
        <Nav/>
        <Bannar/>
        <Portfolio/>
        <About/>
        <Service/>
        <Skills/>
        <Testimonial/>
        <Journal/>
        <Footer/>
       
    </div>
  );
}

export default App;
