import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "../lib/db";
import { redirect } from "next/navigation";

async function getData(userId:string){
    const data = await prisma.user.findUnique({
        where:{
            id:userId,
        },
        select:{
            userName:true,
        }
    })
    return data;

}

export  default async function Settings(){
// gets the data from kindeserversession
 const {getUser} = getKindeServerSession();
 const user = await getUser();
 //if user is not there it is redirected to the navigation page
 if(!user) return redirect("api/auth/creation")
    
 const data = await getData(user.id)

    return(
        <div className="max-w-[1000px] flex flex-col mx-auto mt-4">  
             {data?.userName}
        </div>
    )
}