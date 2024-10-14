/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                figtree: "Figtree",
            },
            colors: {
                light: "#F9FAFB",
                dark: "#252525",
                primary: "#10B981",
                secondary: "#022C22",
            },
        },
    },
    plugins: [],
};
