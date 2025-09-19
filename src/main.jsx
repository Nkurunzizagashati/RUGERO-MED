import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import './index.css';
import App from './App.jsx';

// Create a single QueryClient instance for the app
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Toaster position="top-right" />
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </Provider>
        </HelmetProvider>
    </StrictMode>
);
