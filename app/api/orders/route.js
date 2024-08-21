import { NextResponse } from "next/server";
// import {ConnectDB} from "@/app/lib/config/db"
// import  ConnectDB  from "@/lib/config/db";
import connectDB from "../../../lib/config/db";
import ordersModel from "../../../lib/models/ordersModel";
// import { NextRequest } from "next";

const loadDB =async()=>{
    console.log('hna');
    await connectDB();
}

loadDB();

// export async function GET(req){
//     const test = req.nextUrl.searchParams.get('categoryID')
//     console.log(test);

//     // console.log(request)
//     // const req= request.query?.categoryID
//     // console.log(req)

//   try {
//         if(test){
//             console.log('hna')
//             const res= await categoriesModel.findById(test);
//             return NextResponse.json(res)
//         }
//         else{
//             console.log('hnahu')
//             const res= await categoriesModel.find();
//             // const res= await categoriesModel.findOne({_id:categoryID.categoryID}).select('-__v');
//             console.log(res);
//             return NextResponse.json(res)
//         }
//   }
//   catch(err){
//    return NextResponse.json({messeage:'items not found'})  
//   }

//         console.log('working');
   

// }

export async function POST(req){
    const data= await req.json();
    const res= await ordersModel.create(data);
    console.log(res);
    return NextResponse.json(res);
    
}
