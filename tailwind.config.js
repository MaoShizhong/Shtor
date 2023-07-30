/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#636365',
            },
        },
        fontFamily: {
            spectral: ['Spectral', 'serif', 'system-ui'],
        },
    },
    plugins: [],
};
