
import Link from "next/link";
import Image from "next/image";
import RedditMobile from "../../../public/reddit-full.svg"
import RedditText from "../../../public/logo-name.svg"

import { ThemeToggle } from "./ThemeToggle";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarButts from "./NavbarButts";
import UserDropDown from "./UserDropDown";

export async function Navbar(){
  const{getUser}  = getKindeServerSession();
  const user  = await getUser();
    return(
    <nav className="h-[10vh] border-b w-full flex justify-between lg:px-14 items-center px-5">
                <Link 
                href="/" 
                className="flex items-center"
                >
              <Image 
                src={RedditMobile}
                className="h-10 w-fit"
                alt="alt"
              />
              <Image 
                src={RedditText}
                className="h-9 block w-fit lg:block "
                alt="Reddit"
              />
              
</Link> 
         <div className="flex justify-between items-center gap-x-3">
           <ThemeToggle />
          <NavbarButts user={user} /> 
          {user &&
          <UserDropDown  userImage={user?.picture}  />
          }
               
             
          </div>
         </nav>
    )
   
}