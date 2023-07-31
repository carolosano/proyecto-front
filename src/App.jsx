
import 'semantic-ui-css/semantic.min.css'
import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Portfolio from './Componentes/Portfolio'
import { Routes, Route } from 'react-router-dom';
import Formulario from './Componentes/Formulario';
import Clientes from './Componentes/Clientes';
import Faq from './Componentes/Faq';
import Update from './Componentes/Update';
import Footer from './Componentes/Footer';





function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

