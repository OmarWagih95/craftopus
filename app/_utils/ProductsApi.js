const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = ()=>axiosClient.get('/products?populate=*')
const getProductByID = async(id)=> await axiosClient.get(`/products/${id}?populate=*`)
// const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`)


export default{getLatestProducts,getProductByID}