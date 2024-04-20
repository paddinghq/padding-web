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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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

        'gray-01': '#F9F9FA',
        'gray-02': '#EBEEEF',
        'gray-03': '#DDE1E4',
        'gray-04': '#CDD4D8',
        'gray-05': '#BCC5CB',
        'gray-06': '#A9B5BC',
        'gray-07': '#94A2AB',
        'gray-08': '#7A8C97',
        'gray-09': '#5E6E78',

        'primary-01': '#E9E9E9',
        'primary-02': '#BBBBBB',
        'primary-03': '#9B9B9B',
        'primary-04': '#6D6D6D',
        'primary-05': '#252525',
        'primary-06': '#222222',
        'primary-07': '#1A1A1A',
        'primary-08': '#141414',
        'primary-09': '#101010',

        'accent-01': '#E6F7F6',
        'accent-02': '#B0E7E3',
        'accent-03': '#8ADCD5',
        'accent-04': '#54CBC2',
        'accent-05': '#00B2A4',
        'accent-06': '#00A295',
        'accent-07': '#007E74',
        'accent-08': '#00625A',
        'accent-09': '#004B45',

        'success-01': '#E6FFE2',
        'success-02': '#B2FFA6',
        'success-03': '#3AC922',
        'warning-01': '##FFFAE1',
        'warning-02': '#FFEF98',
        'warning-03': '#F6D523',
        'error-01': '#FFF2F2',
        'error-02': '#FFC0C0',
        'error-03': '#FF3030',
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
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config