'use client'
import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

// import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUserType } from "../types/type";

export default function NavbarButts({user}:{user:KindeUserType}){
    

    return(
        
            <div>
                 {user ? (
                   null
          ) : (
          <div className="flex justify-between items-center gap-x-3">
         <Button asChild variant={"secondary"}><RegisterLink>SignIn</RegisterLink></Button>
          <Button asChild ><LoginLink>LogIn</LoginLink></Button>
         </div>
          )} 

            </div>
    )

}