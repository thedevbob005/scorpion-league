import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://api.sl.sayantanbakshi.com'

Vue.use(VueAxios, axios)
