import axios from 'axios'
import store from './store'
import router from './router'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://172.16.100.7:8108'
axios.defaults.baseURL = '/api'

// http request 拦截器
// axios.interceptors.request.use(
// 	config => {
// 		if (store.state.token) {
// 			// config.headers.Authorization = `Bearer ${store.state.token}`
// 			config.headers.Authorization = `Bearer` + locaStorage["token"]
// 		}
// 		return config
// 	},
// 	err => {
// 		return Promise.reject(err)
// 	}
// )

// axios.interceptors.response.use(
// 	response => {
// 		return response
// 	},
// 	error => {
// 		if (error.response) {
// 			switch (error.response.status) {
// 				case 401:
// 				router.replace({
// 					path: 'login',
// 					query: {redirect: roouter.currentRoute.fullPath}
// 				})
// 			}
// 		}
// 		return Promise.reject(error.response.data)
// 	}
// )

export default axios;