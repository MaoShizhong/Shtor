import { Header } from '../Header';

export function Home({ cartTotal }: { cartTotal: number }) {
    return (
        <>
            <Header activePage="home" cartTotal={cartTotal} />
            <h1>Home</h1>
        </>
    );
}
