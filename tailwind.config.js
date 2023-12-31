/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#636365',
                medium: '#888787',
                soft: '#b5b5b8',
                accent: '#301E1E',
            },
            width: {
                main: 'min(1200px,90vw)',
            },
            fontFamily: {
                spectral: ['Spectral', 'serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};
