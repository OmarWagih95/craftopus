import mongoose from "mongoose";

 const connectDB =async()=>{
    console.log('hna asln')
    try{
        await mongoose.connect('mongodb+srv://omarwagih95:Wiigfc27121995!@cluster0.44pjbzy.mongodb.net/craftopus?retryWrites=true&w=majority&appName=Cluster0'
        );
        }
    catch(error){
    console.log(error)
    }
    console.log('MongoDB Connected...');
}

export default connectDB;