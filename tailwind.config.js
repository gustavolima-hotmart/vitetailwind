/** @type {import('tailwindcss').Config} */


const withCollorOpacity = variableName => ({ opacityValue }) => {
  if(opacityValue) {
    return `rgba(var(${variableName}), ${opacityValue})`
  }

  return `rgb(var(${variableName}))`
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "100": withCollorOpacity("--hc-color-primary-100"),
          "200": withCollorOpacity("--hc-color-primary-200"),
          "300": withCollorOpacity("--hc-color-primary-300"),
          "400": withCollorOpacity("--hc-color-primary-400"),
          "500": withCollorOpacity("--hc-color-primary-500"),
          "600": withCollorOpacity("--hc-color-primary-600"),
          "700": withCollorOpacity("--hc-color-primary-700")
        },
        "secondary": {
          "100": withCollorOpacity("--hc-color-secondary-100"),
          "200": withCollorOpacity("--hc-color-secondary-200"),
          "300": withCollorOpacity("--hc-color-secondary-300"),
          "400": withCollorOpacity("--hc-color-secondary-400"),
          "500": withCollorOpacity("--hc-color-secondary-500"),
          "600": withCollorOpacity("--hc-color-secondary-600"),
          "700": withCollorOpacity("--hc-color-secondary-700")
        },
        "success": {
          "100": withCollorOpacity("--hc-color-success-100"),
          "200": withCollorOpacity("--hc-color-success-200"),
          "300": withCollorOpacity("--hc-color-success-300"),
          "400": withCollorOpacity("--hc-color-success-400"),
          "500": withCollorOpacity("--hc-color-success-500"),
          "600": withCollorOpacity("--hc-color-success-600"),
          "700": withCollorOpacity("--hc-color-success-700")
        },
        "warning": {
          "100": withCollorOpacity("--hc-color-warning-100"),
          "200": withCollorOpacity("--hc-color-warning-200"),
          "300": withCollorOpacity("--hc-color-warning-300"),
          "400": withCollorOpacity("--hc-color-warning-400"),
          "500": withCollorOpacity("--hc-color-warning-500"),
          "600": withCollorOpacity("--hc-color-warning-600"),
          "700": withCollorOpacity("--hc-color-warning-700")
        },
        "danger": {
          "100": withCollorOpacity("--hc-color-danger-100"),
          "200": withCollorOpacity("--hc-color-danger-200"),
          "300": withCollorOpacity("--hc-color-danger-300"),
          "400": withCollorOpacity("--hc-color-danger-400"),
          "500": withCollorOpacity("--hc-color-danger-500"),
          "600": withCollorOpacity("--hc-color-danger-600"),
          "700": withCollorOpacity("--hc-color-danger-700")
        },
        "info": {
          "100": withCollorOpacity("--hc-color-info-100"),
          "200": withCollorOpacity("--hc-color-info-200"),
          "300": withCollorOpacity("--hc-color-info-300"),
          "400": withCollorOpacity("--hc-color-info-400"),
          "500": withCollorOpacity("--hc-color-info-500"),
          "600": withCollorOpacity("--hc-color-info-600"),
          "700": withCollorOpacity("--hc-color-info-700")
        },
        "andromeda": {
          "100": withCollorOpacity("--hc-color-andromeda-100"),
          "200": withCollorOpacity("--hc-color-andromeda-200"),
          "300": withCollorOpacity("--hc-color-andromeda-300"),
          "400": withCollorOpacity("--hc-color-andromeda-400"),
          "500": withCollorOpacity("--hc-color-andromeda-500"),
          "600": withCollorOpacity("--hc-color-andromeda-600"),
          "700": withCollorOpacity("--hc-color-andromeda-700")
        },
        "sirius": {
          "100": withCollorOpacity("--hc-color-sirius-100"),
          "200": withCollorOpacity("--hc-color-sirius-200"),
          "300": withCollorOpacity("--hc-color-sirius-300"),
          "400": withCollorOpacity("--hc-color-sirius-400"),
          "500": withCollorOpacity("--hc-color-sirius-500"),
          "600": withCollorOpacity("--hc-color-sirius-600"),
          "700": withCollorOpacity("--hc-color-sirius-700")
        },
        "neutral": {
          "0": withCollorOpacity("--hc-color-neutral-0"),
          "100": withCollorOpacity("--hc-color-neutral-100"),
          "200": withCollorOpacity("--hc-color-neutral-200"),
          "300": withCollorOpacity("--hc-color-neutral-300"),
          "400": withCollorOpacity("--hc-color-neutral-400"),
          "500": withCollorOpacity("--hc-color-neutral-500"),
          "600": withCollorOpacity("--hc-color-neutral-600"),
          "700": withCollorOpacity("--hc-color-neutral-700"),
          "800": withCollorOpacity("--hc-color-neutral-800"),
          "900": withCollorOpacity("--hc-color-neutral-900"),
          "1000": withCollorOpacity("--hc-color-neutral-1000"),
        }
      }
    },
  },
  plugins: [],
}

