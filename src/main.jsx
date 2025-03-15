import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App'; 
import Header from './components/Header'; // Импортируем новый компонент Header

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header /> {/* Рендерим Header, который включает Navigation и Icons */}
    <App /> {/* Основной компонент приложения */}
  </StrictMode>
);

