import React from 'react'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from '../src/screens/pages/home/Home'
import About from '../src/screens/pages/about/About';
import Contact from '../src/screens/pages/contact/Contact';
import Privacy from '../src/screens/privacy-policy.js';
import Terms from '../src/screens/terms-condition.js';


// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );


function App() {
  return (
    <HashRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="privacy-policy" element={<Privacy />}/>
        <Route path="terms-conditions" element={<Terms />}/>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
