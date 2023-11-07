import imagemPrincipal from './imagens/child-mother-pet-shop-with-their-dog.jpg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/home';
import { Fotos } from './pages/fotos';
import { Produtos } from './pages/produtos';
import { Contatos } from './pages/contatos';
import { Erro } from './pages/page404';
import { Header } from './components/header';
import { FullBody, GlobalStyles } from './components/styled';
import { NavRodape } from './components/NavRodape';

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Produtos" element={<Produtos />} />
      <Route path="fotos" element={<Fotos />} />
      <Route path="Contatos" element={<Contatos/>} />
      <Route path="*" element={<Erro />} />
      </Routes>
      <NavRodape/>
      </BrowserRouter>
      
    </>
  )
}

export default App;
