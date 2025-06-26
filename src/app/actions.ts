'use server'

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";
import prisma from "./lib/db";


export async function updateUserName(formData:FormData){
    //get data
    const {getUser} = getKindeServerSession();
    const user = await getUser();
   //check if data is empty or not
    if(!user){
        return redirect(" /api/auth/creation")
    }
    //from form input from username i hope it will be connnected
    const username = formData.get('username') as string  
// now update this username in the db and return a message
  await prisma.user.update({
    where:{
        id:user.id
    },
    data:{
        userName:username,
    }
  })


    message:"Username upadated"


}

