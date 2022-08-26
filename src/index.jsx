import { GlobalStyle } from './style/global';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './templates/App';
import SobreNos from './templates/SobreNos';
import { Page404 } from './templates/Page404';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import Modal from 'react-modal';
import ProjetosPage from './templates/Projetos';
import Suporte from './templates/Suporte';
const root = ReactDOM.createRoot(document.getElementById('root'));

Modal.setAppElement(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route index path="/" element={<App />} />
      <Route index path="/projetos" element={<ProjetosPage />} />
      <Route index path="/sobrenos" element={<SobreNos />} />
      <Route index path="/suporte" element={<Suporte />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    <GlobalStyle />
    <FooterComponent />
  </BrowserRouter>,
);
