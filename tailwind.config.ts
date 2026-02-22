import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        Halyard: ["var(--font-Halyard)", "serif"],
        sourceSerif: ["var(--font-source-serif-4)", "serif"],
      },
      screens: {
        "2xl": "1400px",
      },
      boxShadow: {
        shadow1: "rgba(17,17,26,0.08) 0px 0px 12px",
      },
      colors: {
        gray1: "#414141",
        myred: "#CD0F4F",
        myred2: "#B3013B",
        myperple: "#4E3552",
        mygreen: "#125A55",
        mygreen2: "#4B6B35",
        mygreen3: "#195A56",
        mygreenhover: "rgba(18, 90, 85, 0.88)",

        lightgreen1: "#CFDDDC",
        seletedred: "#B4013B",
        border1: "#DEDEE5",
        border2: "#E4E4E4",
        color3: "#717171",
        color1: "#B00222",
        color4: "#091F40",
        color5: "#A7282E",
        color6: "#013220",
        color7: "#D8B4E2",
        color8: "#125A55",
        color9: "#CBC2C9",
        yellow1: "#FFC801",
        textcolor1: "#414141",
        textcolor2: "#6B6B6B",
        textcolor3: "#808086",
        myblue: "#2D5A7B",
        mybluehover: "rgba(19, 46, 73,.88)",
        mylightblue: "#A6CFED",
        mylightblue2: "#2d5a7bb3",
        mylightblue3: "#edf3f7",
        mydarkblue: "#071e3e",
        e1: "#e1e1e1",
        e6: "#E6E6E6",
        e8: "#E8E8E8",
        45: "#454545",
        bggray1: "#F5F5F5",
        bggray2: "#D4D4D4",
        bggray3: "#F2F2F2",
        bggray4: "#D9D9D9",
        bggray5: "#CCBBC8",
        bggray6: "#6B6B6B",
        bgcolor1: "#EFF5FA",
        // color list
        darkpurple: "#503453",
        goldenrod: "#BF8822",

        // color list

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
