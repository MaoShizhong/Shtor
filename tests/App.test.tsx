import { render, screen, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '../src/components/home/Home';
import Router from '../src/components/Router';
import { BrowserRouter } from 'react-router-dom';

describe('App renders', () => {
    render(
        <BrowserRouter>
            <Home isScrolled={false} />
        </BrowserRouter>
    );
    const header = screen.getByRole('banner');

    it('Renders header element', () => {
        expect(header).toBeInTheDocument();
    });

    it('Includes a logo and navbar', () => {
        const logo = getByRole(header, 'img');
        const nav = getByRole(header, 'navigation');

        // cast to Boolean with !!
        const containsLogoAndNav = !!logo && !!nav;

        expect(containsLogoAndNav).toBe(true);
    });
});

describe('Routes configured correctly', () => {
    it('Homepage renders', async () => {
        render(<Router />);

        expect(screen.getByRole('heading').textContent).toBe('Home');
    });

    it('Changes to "shop" page when shop tab clicked form homepage', async () => {
        render(<Router />);

        const user = userEvent.setup();

        const shopTab = screen.getByRole('link', { name: 'Shop' });
        await user.click(shopTab);

        expect(screen.getByText(/Shop page!/i)).toBeInTheDocument();
    });

    it('Changes to "shop" then "cart"', async () => {
        render(<Router />);

        const user = userEvent.setup();

        await user.click(screen.getByRole('link', { name: 'Shop' }));
        expect(screen.getByText(/Shop page!/i)).toBeInTheDocument();

        await user.click(screen.getByRole('link', { name: 'Cart' }));
        expect(screen.getByText(/Cart page!/i)).toBeInTheDocument();
    });
});
