import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pagina1 } from './components/Goetzhtml/PaginaInicial';
import { Pagina2 } from './components/Goetzhtml/PaginaInformacoes';
import { Pagina3 } from './components/Goetzhtml/PaginaCoisasNovas';
import { Pagina4 } from './components/Goetzhtml/PaginaCoisasAntigas';
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
