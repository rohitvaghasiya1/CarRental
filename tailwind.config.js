/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#3563E9',
        Secondary: '#596780',
        Bordergray: '#C3D4E966',
        Black: '# ',
        Dark: '#13131399',
        BodyBg: '#F6F7F9',
        DarkGray: '#90A3BF',
        skyBlue: '#54a6ff'
      },
      backgroundImage: {
        carRental: "url('/assets/images/car-bg-blank-round.png')",
        lowPrice: "url('/assets/images/car_rental.png')",
      },
      borderRadius: {
        '10': '10px',
      },
      fontSize: {
        '32': '32px',
      },
    },
  },
  plugins: [],
}

