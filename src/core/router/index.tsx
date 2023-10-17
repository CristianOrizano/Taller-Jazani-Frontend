import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '../layouts/Admin';
import Home from '../../home';
import Investmentconcept from '../../generals/Investmentconcept/views/searchs';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/mineral-types',
				element: <Investmentconcept />,
			},
		
		],
	},
];

export default createBrowserRouter(routes);