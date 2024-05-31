const { default: axiosClient } = require("./axiosClient");

const confirmOrder = async(data)=>{
    console.log('hna')
   await axiosClient.post(`/orders/`,data)}

export default{confirmOrder};
