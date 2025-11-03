import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/theme.css'
import { ThemeProvider } from './hooks/useTheme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
