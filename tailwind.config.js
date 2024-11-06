import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customStone: '#57534e',    // First custom color
        customStoneL: '#a8a29e',    // Second custom color
        customStoneGn: '#cbd5e1',   // Third custom color
        customRed: '#ef4444',     // Fourth custom color
      },
      fontSize: {
        md: '1rem', // Define text-md if needed
      },
    },
  },
  plugins: [],
});