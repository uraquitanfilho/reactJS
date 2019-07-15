//import presets that will to use
module.exports = {
  presets: [
    '@babel/preset-env', // changes JAVASCRIPT that browser do not understand
    '@babel/preset-react', // changes REACT actions that browser do not understand
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
