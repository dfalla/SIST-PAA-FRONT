import React from 'react'
import ReactDOM from 'react-dom/client'
import { queryClient } from './common'
import { QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './context'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <h1>SIST-PAGOS-FRONT</h1>
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
