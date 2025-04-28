import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router";
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import routes from './lib/routes.tsx';
import { queryClient } from './lib/trpc.ts';
import { ThemeProvider } from './components/providers/theme-provider.tsx';
import { Toaster } from 'sonner';

const router = createHashRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid grid-rows-[auto_1fr] h-svh">
          <RouterProvider
            router={router}
          />
        </div>
        <Toaster richColors />
      </ThemeProvider>
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>,
)
