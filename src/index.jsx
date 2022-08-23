import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './templates/App';
import SobreNos from './templates/SobreNos';
import { Page404 } from './templates/Page404';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route index path="/" element={<App />} />
      <Route index path="/sobrenos" element={<SobreNos />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
);
