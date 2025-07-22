import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18next.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/* We are using React.Suspense because we are using i18next http backend package which run asynchronously so we
    are displying Loaidng till that load */}
    <React.Suspense fallback="Loading.."> 
       <App />
    </React.Suspense>
    </React.StrictMode>
    
)
