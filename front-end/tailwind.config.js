/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1100px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        graidient_top: "#130107",
        graidient_bottom: "#DF064E",
        overlap: "#F5F5F5",
        botton_white_text: "#DF064d",
        white_transperent: " rgba(245, 245, 245, 0.97)",
        home_card_bg: "rgba(74, 85, 104, 0.4)",
        home_blue: " rgba(5, 3, 77, 1)",
        shadow_Bottom: "rgba(223, 6, 78, 0.6)",
        footer_gradient_top: "rgba(19 , 1, 7 , 1)",
        footer_gradient_bot: "rgba(223 , 6 , 78 , 1)",
        home_button_color: "rgba(223, 6, 78, 1)",
        editor_button_top: "rgba(255, 255 , 255 ,1)",
        editor_button_bot: "rgba(236 , 236 , 236 , 1)",
        editor_header_button: "rgba(247, 231, 237, 1)",
        sidebar_border: "rgba(152 , 152 , 152 , 1)",
        hover_btn: "rgba(255, 206, 216, 0.2)",
      },

      clipPath: {
        trapezoid: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
};
