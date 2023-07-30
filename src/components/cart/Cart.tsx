import { Header } from '../Header';

export function Cart({ cartTotal }: { cartTotal: number }) {
    return (
        <>
            <Header activePage="cart" cartTotal={cartTotal} />
            <h1>Cart page!</h1>
        </>
    );
}
