const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: ({ theme }) => ({
                primary: {
                    DEFAULT: colors.purple[500],
                    ...colors.purple
                }
            })
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
