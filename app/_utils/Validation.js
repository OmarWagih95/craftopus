function validation(value){
let error ={};
if(!value.name){
    error.name='Name is required'
}

if(!value.address){
    error.address='Your address is required'
}
if(!value.whatsappNumber){
    error.whatsappNumber='whatsapp number is required to confirm your order'
}
else if(value.whatsappNumber.length !== 11){
error.whatsappNumber='Your number is incorrect'
}

return error;


}

export default validation ;