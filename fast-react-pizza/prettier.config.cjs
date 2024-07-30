module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  singleQuote: true,
};


// // prettier.config.cjs

// module.exports = (async () => {
//   const prettierPluginTailwindCSS = await import('prettier-plugin-tailwindcss');
  
//   return {
//     plugins: [prettierPluginTailwindCSS],
//     // other Prettier configuration options
//   };
// })();