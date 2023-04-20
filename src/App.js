import Barra1 from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage';
import { HomeFooter } from './components/HomeFooter/HomeFooter';
import { Contacto } from './components/pages/Contacto/Contacto';
import { PageNotFound } from './components/pages/PageNotFound/PageNotFound';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import { Consultoria } from './components/pages/Servicios/Consultoria/Consultoria';
import { Hosting } from './components/pages/Servicios/Hosting/Hosting';
import { ServidoresDedicados } from './components/pages/Servicios/ServidoresDedicados/ServidoresDedicados';
import { SoporteCorporativo } from './components/pages/Servicios/SoporteCorporativo/SoporteCorporativo';
import { VirtualizacionDeServidores } from './components/pages/Servicios/VirtualizacionDeServidores/VirtualizacionDeServidores';
import { Fortinet, Promociones } from './components/pages/Servicios/Fortinet/Fortinet';
import { SobreNosotros } from './components/pages/SobreNosotros/SobreNosotros';
import { Servicios } from './components/pages/Servicios/Servicios/Servicios';
import { PreNavbar } from './components/PreNavbar/PreNavbar';
import { Redes } from './components/pages/Servicios/Redes/Redes';
import { PreNavbarLinks } from './components/PreNavbarLinks/PreNavbarLinks';

function App() {
  return (

    <BrowserRouter>
    <ScrollToTop>
      <PreNavbar/>
      <PreNavbarLinks/>
        <Barra1/>
            <Routes>
              <Route path="/" element= {<HomePage/> }/>
              <Route path='*' element= { <Navigate to ="/PageNotFound" /> } />
              <Route path="/PageNotFound" element= {<PageNotFound/> }/>
              <Route path="/nosotros" element= {<SobreNosotros/> }/>
              <Route path="/contacto" element= {<Contacto/> }/>
              <Route path="/consultoria" element= {<Consultoria/> }/>
              <Route path="/hosting" element= {<Hosting/> }/>
              <Route path="/servidoresDedicados" element= {<ServidoresDedicados/> }/>
              <Route path="/soporteCorporativo" element= {<SoporteCorporativo/> }/>
              <Route path="/virtualizacionServidores" element= {<VirtualizacionDeServidores/> }/>
              <Route path="/fortinet" element= {<Fortinet/> }/>
              <Route path="/servicios" element= {<Servicios/> }/>
              <Route path="/redes" element= {<Redes/> }/>

            </Routes>
        <HomeFooter/>
        </ScrollToTop>
    </BrowserRouter> 
  );
}

export default App;
