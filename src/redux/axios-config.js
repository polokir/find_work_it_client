import axios from 'axios';
const instance = axios.create({
    withCredentials:true,
    baseURL:'http://localhost:4444',
})
instance.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
    console.log(config)
    return config;
});

instance.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`http://localhost:4444/api/recrut/refresh`, {withCredentials: true})
            console.log(response.data.accessToken)
            localStorage.setItem('token', response.data.accessToken);
            return instance.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})
export default instance;