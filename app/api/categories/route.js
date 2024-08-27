import { NextResponse } from "next/server";
// import {ConnectDB} from "@/app/lib/config/db"
// import  ConnectDB  from "@/lib/config/db";
import connectDB from "../../../lib/config/db";
import categoriesModel from "../../../lib/models/categoryModel";
// import { NextRequest } from "next";

const loadDB =async()=>{
    console.log('hna');
    await connectDB();
}

loadDB();

export async function GET(req){
    const test = req.nextUrl.searchParams.get('categoryID')
    console.log(test);

    // console.log(request)
    // const req= request.query?.categoryID
    // console.log(req)

  try {
        if(test){
            console.log('hna')
            const res= await categoriesModel.findById(test);
            console.log(res.data)
            return NextResponse.json(res)
        }
        else{
            console.log('hnahu')
            const res= await categoriesModel.find();
            // const res= await categoriesModel.findOne({_id:categoryID.categoryID}).select('-__v');
            console.log(res);
            return NextResponse.json(res)
        }
  }
  catch(err){
   return NextResponse.json({messeage:'items not found'})  
  }

        console.log('working');
   

}

