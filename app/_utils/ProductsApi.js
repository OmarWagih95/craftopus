const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = ()=>axiosClient.get('/products?populate=*')
const getCategories = ()=>axiosClient.get('/categories?populate=*')
const getProductByID = async(id)=> await axiosClient.get(`/products/${id}?populate=*`)
const getCategoryProducts = async(categoryName)=> await axiosClient.get(`/products?populate=*&[filters][category][categoryName][$eq]=${categoryName}`)

// console.log(`hna flfunc ${categoryName}`);
// try{
    
// }
// catch(e){console.log(e);

// }

// await axiosClient.get(`/products?filters[productName][$eq]=Drawingportrait?populate=*`)
// const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`)


export default{getLatestProducts,getCategories,getProductByID,getCategoryProducts}