// const fetch = require("node-fetch");

// module.exports = async function () {
//   return fetch("https://api.github.com/repos/google/grr")
//     .then((res) => res.json())
//     .then((json) => {
//       let rounded = Math.round(json.stargazers_count / 1000) * 1000;
//       let firstDigit = String(rounded).charAt(0);
//       return {
//         stargazers: firstDigit,
//       };
//     });
// };
