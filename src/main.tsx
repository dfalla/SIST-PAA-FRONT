import React from 'react'
import ReactDOM from 'react-dom/client'
import { queryClient } from './common'
import { QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './context'
import theme from './theme'
// import { Demo } from './demo'
import { App } from './router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          {/* <Demo/> */}
          <App/>
          <ReactQueryDevtools initialIsOpen={false} />
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
