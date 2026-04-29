/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
          primaryAccent: 'var(--color-primary-accent)',
          primaryLight: 'var(--color-primary-light)',
          /* --- 2. DARK UI BACKGROUNDS --- */
           bgBody: "var(--color-bg-body)",
           pureBlack: "var(--color-bg-pure-black)",
           darkSurface: "var(--color-bg-dark-surface)",
           bgSoft: "var(--color-bg-soft)",
            bgInput: "var(--color-bg-input)",
            borderColor: "var(--color-gray-border)",
            grayMetallic: "var(--color-gray-metallic)",
           grayCool: "var(--color-gray-cool)",
           grayLight: "var(--color-gray-light)",
           graySkeleton: "var(--color-gray-skeleton)",
           silverMuted: "var(--color-silver-muted)",
           textBright: "var(--color-text-bright)",
           textMuted: "var(--color-text-muted)",
           /* --- 4. TEXT COLORS (From your specific hex codes) --- */
           textGray1: "var(--color-text-gray-1)",
           textGray2: "var(--color-text-gray-2)",
           textGray3: "var(--color-text-gray-3)",
           textGray4: "var(--color-text-gray-4)",
           textGray5: "var(--color-text-gray-5)",
           textGray6: "var(--color-text-gray-6)",
           textGray7: "var(--color-text-gray-7)",
             /* --- 5. SOCIAL & ALERTS --- */
             whatsapp: "var(--color-whatsapp)",
             whatsappDark: "var(--color-whatsapp-dark)",
             error: "var(--color-error)",
             errorAlt: "var(--color-error-alt)",
  /* --- 6. GLASSMORPHISM & TRANSPARENCIES --- */
             glassWhite10: "var(--glass-white-10)",
             glassWhite25: "var(--glass-white-25)",

               /* Background Pattern Grid */
              patternGrid: "var(--pattern-grid)",

                /* Hero Deep Gradient */
              gradHeroDeep: "var(--grad-hero-deep)",
                
  /* Radial Center Gradient */
              gradIndustrialRadial: "var(--grad-industrial-radial)",











                 

      },
    },
  },
  plugins: [],
}