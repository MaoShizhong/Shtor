import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Shop } from './shop/Shop';
import { Cart } from './cart/Cart';
import { Home } from './home/Home';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'shop',
            element: <Shop />,
        },
        {
            path: 'cart',
            element: <Cart />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
