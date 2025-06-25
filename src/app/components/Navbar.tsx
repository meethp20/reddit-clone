import Link from "next/link";
import Image from "next/image";

import RedditMobile from "../../../public/reddit-full.svg"
import RedditText from "../../../public/logo-name.svg"
export function Navbar(){
    return(
    <nav className="h-[10vh] w-full flex justify-between lg:px-14 items-center px-5">
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
        </nav>
    )
   
}