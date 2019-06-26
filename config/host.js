const isDugger = process.env.NODE_ENV !== 'production';

// console.log(window.location.hostname)
var development = {
  baseUrl: 'http://lingshou.blu-rayvision.com/api',
};
var production = {
  baseUrl: '/api',
};


export default isDugger ? development : production;