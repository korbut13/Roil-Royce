// import ReactDOM from 'react-dom/client';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import './index.css';

// import { store } from './redux/store.ts';

// import Root from './Root.tsx';
// import MainPage from './pages/MainPage.tsx';
// import ProductsPage from './pages/Products.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children:[
//       {
//         path:"/",
//         element:<MainPage/>
//       },
//       {
//         path:"/products",
//         element:<ProductsPage/>
//       }
//     ],
//   },
// ]);

// console.log("router", router)
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>
// );

import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import { store } from './redux/store.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
  <Provider store={store}>
      <App/>
  </Provider>
 </BrowserRouter>
);
