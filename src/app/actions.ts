'use server'

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { AwardIcon } from "lucide-react";
import { redirect } from "next/navigation";


export async function updateUserName(formData:FormData){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user){
        return redirect(" /api/auth/creation")
    }
    const userName = formData.get('username') as string  

}