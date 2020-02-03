const axios = require('axios');

(async () => {
  const api = axios.create({ baseURL: `http://localhost:${process.env.PORT}` });

  const loginData = await api.post('/login', { username: process.env.SA_USERNAME, password: process.env.SA_PASSWORD });

  console.log(loginData);
})();
