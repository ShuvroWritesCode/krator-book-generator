/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#faf9f9',
            'btn' : '#7B51D6',
            'btn-blue' : '#bae5f5',
            'btn-green' : '#ccf0c0',
            'btn-purple' : '#e2d3fe',
            'btn-orange' : '#FDFED3',
            'grey' :'#707281',
            'warmLow': '#f7dfe3',
            'warmMidLow': '#f97f21',
            'warmMid': '#d2274d', 
            'warmHigh': '#3f0d1f',
            'cold-low': '#c1fdfe',
            'cold-mid-low': '#40daf0',
            'cold-mid': '#78abf2',
            'cold-high': '#10019b',
            'contrast-low': '#ff3795',
            'contrast-mid-low': '#ffd127',
            'contrast-mid': '#3f00ff',
            'contrast-high': '#b000ff',
            }),
    textColor: theme => theme('colors'),
    textColor: {
      'logo' : '#6939D1',
      'primary' : '#ffffff',
      'black' :'#000000',
      'grey' :'#707281'
    }
  },
  plugins: [],
}
