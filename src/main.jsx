import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import Navigation from './components/Navigation'; // Импортируем компонент Navigation

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation /> {/* Добавляем компонент Navigation */}
    <App /> {/* Оставляем App, если нужен */}
  </StrictMode>
);
