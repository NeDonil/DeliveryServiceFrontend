/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),

        function({addUtilities}){
            const newUtilities = {
                ".no-scrollbar::-webkit-scrollbar" :{
                    display:"none"
                },

                ".no-scrollbar" :{
                    "-ms-overflow-style" : "none",
                    "scrillbar-width": "none"
                },
                ".pretty-font": {
                    "font-family": "Inter,Avenir,Helvetica,Arial,sans-serif"
                },

                ".bg-pretty-gray": {
                    "backgroud-color": "#f2f2f2"
                },
                "max-h": {
                    '128': '32rem',
                }
            };

            addUtilities(newUtilities);
        },
    ],
}

