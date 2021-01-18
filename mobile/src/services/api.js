import axios from 'axios';

const api = axios.create({
   //baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.5.4:3333', //usb
  // baseURL: 'http://10.0.3.2:3333', //genimotion
  baseURL: 'http://10.0.2.2:3333',
  // emulador,
});

export default api;
