module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "brandprimary-bg": "var(--brandprimary-bg)",
        "graygray-300": "var(--graygray-300)",
        "graygray-400": "var(--graygray-400)",
        "graygray-50": "var(--graygray-50)",
        "graygray-500": "var(--graygray-500)",
        "graygray-600": "var(--graygray-600)",
        "graygray-700": "var(--graygray-700)",
        "graygray-800": "var(--graygray-800)",
        "graygray-900": "var(--graygray-900)",
        "shadelight-background": "var(--shadelight-background)",
        "shadeprimary-lite-bg": "var(--shadeprimary-lite-bg)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "button-text-btn-lg": "var(--button-text-btn-lg-font-family)",
        "footer-footer-links": "var(--footer-footer-links-font-family)",
        "footer-footer-sm": "var(--footer-footer-sm-font-family)",
        "headings-headings-h2": "var(--headings-headings-h2-font-family)",
        "headings-headings-h3": "var(--headings-headings-h3-font-family)",
        "headings-headings-h4": "var(--headings-headings-h4-font-family)",
        "headings-headings-h5": "var(--headings-headings-h5-font-family)",
        "headings-headings-h5-900":
          "var(--headings-headings-h5-900-font-family)",
        "headings-headings-h6": "var(--headings-headings-h6-font-family)",
        "headings-headings-sm": "var(--headings-headings-sm-font-family)",
        "paragraphs-default": "var(--paragraphs-default-font-family)",
        "paragraphs-default-lg": "var(--paragraphs-default-lg-font-family)",
        "paragraphs-para-1": "var(--paragraphs-para-1-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "btn-shadow": "var(--btn-shadow)",
        "card-shadow": "var(--card-shadow)",
        "card-shadow-lite": "var(--card-shadow-lite)",
        "shadow-nav-shadown": "var(--shadow-nav-shadown)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
