import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import ProductsPage from './pages/Products.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products",
    element: <ProductsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
 <RouterProvider router={router} />
);
