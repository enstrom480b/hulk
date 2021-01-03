

const fetch =require ('node-fetch');
// Or just: import 'cross-fetch/polyfill';

fetch('https://api.github.com/users/enstrom480b')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.error(err);
  });