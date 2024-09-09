// import { lazy } from 'react';
// import { RouteObject } from 'react-router-dom';

// const Dashboard = lazy(() => import('../pages/HomePage'));
// const Users = lazy(() => import('../pages/Users'));
// const Products = lazy(() => import('../pages/Products'));
// const ProductList = lazy(() => import('../pages/Products/ProductList'));
// const ProductCreate = lazy(() => import('../pages/Products/ProductCreate'));
// const ProductEdit = lazy(() => import('../pages/Products/ProductEdit'));

// export interface CustomRouteObject extends RouteObject {
//   requiredRoles?: string[];
//   children?: CustomRouteObject[];
// }

// const routes: CustomRouteObject[] = [
//   {
//     path: '/',
//     element: <Dashboard />,
//     requiredRoles: ['user', 'admin'],
//   },
//   {
//     path: '/users',
//     element: <Users />,
//     requiredRoles: ['admin'],
//   },
//   {
//     path: '/products',
//     element: <Products />,
//     requiredRoles: ['user', 'admin'],
//     children: [
//       {
//         path: '',
//         element: <ProductList />,
//       },
//       {
//         path: 'create',
//         element: <ProductCreate />,
//         requiredRoles: ['admin'],
//       },
//       {
//         path: 'edit/:id',
//         element: <ProductEdit />,
//         requiredRoles: ['admin'],
//       },
//     ],
//   },
// ];

// export default routes;
