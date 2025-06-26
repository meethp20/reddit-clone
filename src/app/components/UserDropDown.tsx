'use client'

import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import NoIcon from "../../../public/no-icon.jpg"
import Image from "next/image";


export default function (){
//  <img src="NoIcon" alt="No icon" className="w-6 h-6 rounded-full "/>
    return(
       <DropdownMenu>
          <DropdownMenuTrigger>
              <div className="rounded-full border px-2 py-2  justify-around lg:px-4 lg:py-2 flex items-center gap-x-3"> 
                <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

                 <Image src={NoIcon} 
                  alt="no icon" className="rounded-full h-8 w-fit" />

              </div>
          </DropdownMenuTrigger>
       </DropdownMenu>
    )
}