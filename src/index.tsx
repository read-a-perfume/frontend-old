import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {ThemeProvider} from '@emotion/react'
import {theme} from './theme/theme'
import {CssBaseline} from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
