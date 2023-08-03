export function Footer() {
    return (
        <footer className="flex justify-center w-full p-8 mt-4 bg-cyan-950">
            <div className="flex flex-col flex-wrap items-center gap-8 text-lg text-center text-white w-main sm:items-start h-max sm:flex-row justify-evenly sm:text-left">
                <CustomerServices />
                <CompanyInfo />
                <AcceptedPayments />
            </div>
        </footer>
    );
}

function CustomerServices() {
    return (
        <div>
            <h1 className="mb-2">Customer Services (dummy links)</h1>
            <ul className="text-sm font-light leading-6">
                <li>
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">Store Finder</a>
                </li>
                <li>
                    <a href="/">Delivery & Returns</a>
                </li>
                <li>
                    <a href="/">FAQs</a>
                </li>
                <li>
                    <a href="/">Terms & Conditions</a>
                </li>
                <li>
                    <a href="/">Privacy & Cookies</a>
                </li>
            </ul>
        </div>
    );
}

function CompanyInfo() {
    return (
        <div>
            <h1 className="mb-2">Company Info (dummy links)</h1>
            <ul className="text-sm font-light leading-6">
                <li>
                    <a href="/">Newsletter</a>
                </li>
                <li>
                    <a href="/">Careers</a>
                </li>
                <li>
                    <a href="/">Promotions</a>
                </li>
                <li>
                    <a href="/">Gift Cards</a>
                </li>
                <li>
                    <a href="/">Equality Report</a>
                </li>
            </ul>
        </div>
    );
}

function AcceptedPayments() {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h1 className="mb-3">Accepted Payments</h1>
            <div className="grid grid-cols-3 gap-2">
                <img
                    src="./payment-icons/visa.png"
                    className="object-scale-down w-10 border rounded-sm h-7 bg-slate-50 border-soft"
                />
                <img
                    src="./payment-icons/mastercard.png"
                    className="object-scale-down w-10 p-1 border rounded-sm h-7 bg-slate-50 border-soft"
                />
                <img
                    src="./payment-icons/amex.png"
                    className="object-cover w-10 border rounded-sm h-7"
                />
                <img
                    src="./payment-icons/paypal.png"
                    className="object-scale-down object-center w-10 border rounded-sm h-7 bg-slate-50 border-soft"
                />
                <img
                    src="./payment-icons/google-pay.png"
                    className="object-scale-down object-center w-10 border rounded-sm h-7 bg-slate-50 border-soft"
                />
                <img
                    src="./payment-icons/apple-pay.png"
                    className="object-scale-down object-center w-10 border rounded-sm h-7 bg-slate-50 border-soft"
                />
            </div>
            <a
                className="flex items-center gap-2 mt-8 text-sm visited:text-white"
                href="https://github.com/MaoShizhong/shopping-cart-TOP"
            >
                <img className="h-6" src="./github.png" />
                MaoShizhong
            </a>
        </div>
    );
}
