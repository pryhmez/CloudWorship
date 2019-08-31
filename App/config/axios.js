import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = "http://cloudworship.com/api/v1/";
instance.defaults.timeout = 20000;
//...
//and other options

export { instance as default };