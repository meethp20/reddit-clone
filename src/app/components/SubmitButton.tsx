'use client'

import { Button } from "@/components/ui/button"
import { Loader2, Loader2Icon } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton({text}:{text:string}){

    const{pending} =useFormStatus()

    return(
        <>
           {
            pending? (
             <Button >
                  <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
                  please wait
             </Button>
            ) : (
             <Button type="submit" className="hover:cursor-pointer">
                {text}
               </Button>
            )
           }
        </>
    )
}

export function SaveButton(){
const {pending} = useFormStatus();
    return (
        
        <>
          {pending? (
         <Button disabled > 
          <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
         Saving.. </Button>

          ):(
            <Button className="mt-2 w-full" type="submit" size="sm" >
                Save
                 </Button> 
          )}
        
       </>
    )
}