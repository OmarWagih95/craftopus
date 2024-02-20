const { axios } = require("axios");
const userAPI = process.env.NEXT_PUBLIC__USER_TOKEN;
const apiUrl='http//localhost:3000/api'

const axiosClient =axios.create({
    baseUrl: apiUrl,
    Headers:{
        Authorization:`Bearer: ${userAPI}`
    }
})

export default axiosClient;