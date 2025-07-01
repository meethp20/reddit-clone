'use client' 
import { updateDescription } from "../actions";
import { SaveButton } from "./SubmitButton"
import { Textarea } from "@/components/ui/textarea"
 import { useActionState } from "react";
 interface desProps{
    subName:string;
    desciption:string | null | undefined;
 }

export function Subdescription({subName,desciption}:desProps){
 

    return(
        <>
         <form action={updateDescription}>
                  <input  hidden defaultValue={subName} name="subName" />
                  <Textarea className="  " placeholder="add description" name="description" defaultValue={desciption    ??undefined}/>
                  <SaveButton />
                 </form>
                 </>
    )
}