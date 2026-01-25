/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#FAF7F2',
                    dark: '#0F172A',
                    surface: {
                        light: '#F3EFE7',
                        dark: '#1E293B'
                    },
                    accent: {
                        light: '#D97706',
                        dark: '#FBBF24'
                    },
                    text: {
                        light: '#111827',
                        dark: '#F8FAFC'
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            }
        }
    }
}