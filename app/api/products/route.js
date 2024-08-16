import { NextResponse } from "next/server";
// import {ConnectDB} from "@/app/lib/config/db"
// import  ConnectDB  from "@/lib/config/db";
import connectDB from "@/lib/config/db";
import productsModel from "@/lib/models/productsModel";
import axios from "axios";
import { NextURL } from "next/dist/server/web/next-url";
import { NEXT_URL } from "next/dist/client/components/app-router-headers";
import { NextApiRequest, NextApiResponse } from 'next';

// import { NextRequest } from "next";

const loadDB =async()=>{
    console.log('hna');
    await connectDB();
}

loadDB();

export async function GET(req) {
    const productID=req.nextUrl.searchParams.get('productID');
    const categoryID = req.nextUrl.searchParams.get('categoryID')
    if(productID){
        console.log(productID)
        const productData = await productsModel.findById(productID);
        console.log(productData);
        return NextResponse.json(productData);
    }
    else{

        console.log(categoryID)
       const productsByCategory = await productsModel.find({categoryID: categoryID});
       console.log(productsByCategory);
       return NextResponse.json(productsByCategory);
    }
}