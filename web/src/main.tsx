import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pagina1 } from './components/Goetzhtml/Pagina1';
import { Pagina2 } from './components/Goetzhtml/Pagina2';
import { Pagina3 } from './components/Goetzhtml/Pagina3';
import { Pagina4 } from './components/Goetzhtml/Pagina4';
import './global.css';
import './assets/css/Styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <Router>
      <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/Pagina2" element={<Pagina2 />} />
          <Route path="/Pagina3" element={<Pagina3 />} />
          <Route path="/Pagina4" element={<Pagina4 />} />
      </Routes>
  </Router>
</>
)
