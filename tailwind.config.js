/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        linkWhiz: {
          "primary": "#2563eb",
          "primary-content": "#f3f4f6",
          "secondary": "#4791FF",
          "secondary-content": "#f3f4f6",
          "accent": "#FFD700",
          "accent-content": "#1f2937",
          "neutral": "#F9F9FB",
          "neutral-content": "#151515",
          "base-100": "#F4F4F6",
          "base-200": "#d4d4d6",
          "base-300": "#b5b5b7",
          "base-content": "#141415",
          "info": "#17A2B8",
          "info-content": "#f3f4f6",
          "success": "#28A745",
          "success-content": "#f3f4f6",
          "warning": "#FFC107",
          "warning-content": "#140c00",
          "error": "#DC3545",
          "error-content": "#f3f4f6",
        },
      },
      "dark",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

