import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    borderRadius: {
      DEFAULT: "0.8rem",
      full: "9999px"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "custom": "1110px",
      },
    },
    extend: {
      screens: {
        'custom': {'min' :"1110px"}
      },
      colors: {
        border: "var(--border)",
        input: {
          DEFAULT:  "var(--input)",
          text:  "var(--input-text)",
          placeholder:  "var(--input-placeholder)"
        },
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          darken:"var(--primary-darken)",
          darker:"var(--primary-darker)",
          darkest:"var(--primary-darkest)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hover: "var(--secondary-hover)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          hover: "var(--accent-hover)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      maxWidth: {
        screen: "111rem"
      },
      gap : {
        small: "2.4rem",
        medium: "3.2rem"
      },
      padding: {  
        small: "2.4rem",
        medium: "3.2rem"
      },
      margin: {  
        small: "2.4rem",
        medium: "3.2rem"},
      fontSize: {
        form: ["1.2rem", {lineHeight: "2.5rem", letterSpacing: "-0.02rem", fontWeight: "bold"}],
        subtitle: ["1.3rem", {lineHeight: "2.5rem", letterSpacing: "0.2rem", fontWeight: "bold"}],
        overline: ["1.4rem", {lineHeight: "1.9rem", letterSpacing: "1rem", fontWeight: "normal"}],
        base: ["1.5rem", {lineHeight: "2.5rem", letterSpacing: "0.1rem", fontWeight: "normal"}],
        h6: ["1.8rem", {lineHeight: "2.4rem", letterSpacing: "0.13rem", fontWeight: "bold"}],
        h5: ["2.4rem", {lineHeight: "3.3rem", letterSpacing: "0.17rem", fontWeight: "bold"}],
        h4: ["2.8rem", {lineHeight: "3.8rem", letterSpacing: "0.2rem", fontWeight: "bold"}],
        h3: ["3.2rem", {lineHeight: "3.6rem", letterSpacing: "0.115rem", fontWeight: "bold"}],
        h2: ["4rem",  {lineHeight: "4.4rem", letterSpacing: "0.115rem", fontWeight: "bold"}],
        h1: ['5.6rem', {lineHeight: "5.8rem", letterSpacing: "0.2rem", fontWeight: "bold"}],
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '500': '500ms',
        '550': '550ms',
        '600': '600ms',
        '700': '700ms',
        '750': '750ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms'
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
        "fade-in-top": {
          from: { transform: "translateY(-.8rem)", opacity: "0" },
          to: { transform: "translateY(0%)",  opacity: "1" },
        },
        "fade-in-left": {
          from: { transform: "translateX(-.9rem)", opacity: "0" },
          to: { transform: "translateX(0%)",  opacity: "1" },
        },
        "grow-bar": { 
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" }
        },
        "grow":  {
          '0%, 100%': { transform: 'scale(1)' },
          '10%':{ transform: 'scale(1.01)' },
          '20%':{ transform: 'scale(1)' },
          '30%':{ transform: 'scale(1.01)' },
          '40%':{ transform: 'scale(1)' },
          '50%':{ transform: 'scale(1.01)' },
        },
        "beatsm": {
          '0%, 100%': { width: "0" ,transform: 'translate(-50%, -50%) ' },
          "80%": {opacity: "1"},
          "100%" : {width: "472px",opacity: "0"}
        },
        "beat": {
          '0%, 100%': { width: "0" ,transform: 'translate(-50%, -50%) ' },
          '50%': { transform: 'translate(-50%, -50%) ' },
           "80%": {opacity: "1"},
          "100%" : {width: "542px" , opacity: "0"}
        },
        "beatlg": {
          '0%, 100%': { width: "0" ,transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(-50%, -50%) ' },
           "80%": {opacity: "1"},
          "100%" : {width: "944px", opacity: "0"}
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "beatsm": "beatsm 1.3s infinite",
        "beat": "beat 1.3s  infinite",
        "beatlg": "beatlg 1.3s  infinite",
        "grow": "grow 1.3s  infinite",
        "fade-in-top": "fade-in-top .5s ease-in-out forwards",
        "fade-in-left": "fade-in-left .5s ease-in-out forwards",
        "grow-bar": "grow-bar .5s linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config