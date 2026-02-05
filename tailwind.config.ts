import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "#0b0b12",
        night: "#0f1324",
        brand: {
          50: "#eef6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        farsi: ["var(--font-farsi)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,0.2), 0 20px 60px rgba(15,19,36,0.35)",
        soft: "0 12px 30px rgba(15,19,36,0.18)"
      },
      backgroundImage: {
        "mesh-gradient": "radial-gradient(circle at 10% 10%, rgba(59,130,246,0.3), transparent 45%), radial-gradient(circle at 90% 20%, rgba(245,158,11,0.2), transparent 40%), linear-gradient(135deg, #0f1324 0%, #0b0b12 100%)"
      }
    }
  },
  plugins: []
};

export default config;