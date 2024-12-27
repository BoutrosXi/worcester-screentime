require('dotenv').config();

console.log('Current directory:', __dirname);
console.log('Full path:', require('path').resolve(__dirname, '../.env'));
console.log('All env variables:', process.env);



