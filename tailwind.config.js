// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
    	extend: {
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            heading: ['Montserrat', 'sans-serif'],
        },
    		colors: {
    			rugero: {
    				primary: '#8BC34A',
    				secondary: '#333333',
    				darkGreen: '#4C7B2B',
    				lightGray: '#CCCCCC',
    				green1: '#8BC34A',
    				green2: '#7CAF40',
    				green3: '#6D9B36',
    				green4: '#5E872C',
    				green5: '#4C7B2B',
    				gray1: '#333333',
    				gray2: '#2E2E2E',
    				gray3: '#292929',
    				gray4: '#242424',
    				gray5: '#1F1F1F',
    				background: '#FFFFFF',
    				muted: '#F5F5F5',
    				text: '#333333',
    				textPrimary: '#333333',
    				textSecondary: '#4C7B2B',
    				textOnPrimary: '#FFFFFF',
    				textMuted: '#6B7280',
    				accent: '#FF6F61',
    				success: '#8BC34A'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		animation: {
    			scroll: 'scroll 40s linear infinite',
    			spin: 'spin 1.2s cubic-bezier(0.4,0,0.2,1) infinite',
    			'spin-reverse': 'spin 1.5s cubic-bezier(0.4,0,0.2,1) infinite reverse',
    			rotate: 'rotate 2s linear infinite',
    			pulse: 'pulse 1s ease-in-out infinite alternate',
    			glow: 'glow 2s ease-in-out infinite alternate',
    			'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
    			float: 'float 6s ease-in-out infinite'
    		},
    		keyframes: {
    			scroll: {
    				'0%': {
    					transform: 'translateX(0)'
    				},
    				'100%': {
    					transform: 'translateX(-50%)'
    				}
    			},
    			spin: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			rotate: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			pulse: {
    				'0%': {
    					transform: 'scale(1)',
    					opacity: 1
    				},
    				'100%': {
    					transform: 'scale(1.2)',
    					opacity: 0.6
    				}
    			},
    			glow: {
    				'0%': {
    					textShadow: '0 0 10px #10b981',
    					opacity: 0.8
    				},
    				'100%': {
    					textShadow: '0 0 20px #10b981, 0 0 30px #10b981',
    					opacity: 1
    				}
    			},
    			'loading-bar': {
    				'0%': {
    					left: '-100%'
    				},
    				'100%': {
    					left: '100%'
    				}
    			},
    			float: {
    				'0%,100%': {
    					transform: 'translateY(0px) translateX(0px)'
    				},
    				'25%': {
    					transform: 'translateY(-20px) translateX(10px)'
    				},
    				'50%': {
    					transform: 'translateY(-10px) translateX(-5px)'
    				},
    				'75%': {
    					transform: 'translateY(-15px) translateX(5px)'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
