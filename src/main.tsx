// import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '@popperjs/core';
import 'bootstrap';

import './core/styles/app.scss';

import { RouterProvider } from 'react-router-dom'
import router from './core/router'

import { AxiosInterceptor } from './core/interceptors';

AxiosInterceptor();

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
	// </React.StrictMode>,
);

