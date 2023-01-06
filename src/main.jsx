import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './Context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
