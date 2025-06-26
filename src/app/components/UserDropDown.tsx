'use client'

import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
// import NoIcon from "../../../public/no-icon.jpg"
// import Image from "next/image";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

interface IncomingImage{
    userImage:string|null|undefined;
}
export default function ({userImage}:IncomingImage){
//  <img src="NoIcon" alt="No icon" className="w-6 h-6 rounded-full "/>
    return(
       <DropdownMenu>
          <DropdownMenuTrigger>
              <div className="rounded-full border px-2 py-2  justify-around lg:px-4 lg:py-2 flex items-center gap-x-3"> 
                <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

                 {/* <Image src={userImage??NoIcon} 
                 width={32}
                 height={32}
                  alt="no icon" className="rounded-full h-8 w-fit" /> */}
                
                  <img src={userImage??"../../../public/no-icon.jpg"} className="rounded-full h-8 w-fit" alt="UserIcon" />

              </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="lg:w-[300px] w-[150px] " >
            <DropdownMenuItem>
                <Link className="w-full" href="/r/create" >
                Create Community
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link className="w-full" href="create" >
                Create post
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link className="w-full" href="/r/create" >
                Create Community
                </Link>
            </DropdownMenuItem>
            {userImage && <>
            <DropdownMenuSeparator />
             <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
            </>
}
          </DropdownMenuContent>
       </DropdownMenu>
    )
}