import Link from "next/link";
import Image from "next/image";

import RedditMobile from "../../../public/reddit-full.svg"

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
                  alt="mobile reddit blah"/>
                
</Link>
        </nav>
    )
   
}