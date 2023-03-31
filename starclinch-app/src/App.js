import '../src/css/App.css';
import '../src/css/celeb.css';
import '../src/css/Header.css';
import '../src/css/footer.css';
import '../src/css/pages.css';


import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
       <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
