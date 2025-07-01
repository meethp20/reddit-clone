"use client"
import { updateDescription } from "../actions";
import { SaveButton } from "./SubmitButton"
import { Textarea } from "@/components/ui/textarea"
import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";

interface desProps{
    subName:string;
    desciption:string | null | undefined;
 }

const initialState = { message: "", success: false };

export function Subdescription({subName,desciption}:desProps){
  const [state, formAction] = useActionState(updateDescription, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) toast.success(state.message);
      else toast.error(state.message);
    }
  }, [state]);

  return(
        <>
         <form action={formAction}>
                  <input  hidden defaultValue={subName} name="subName" />
                  <Textarea className="  " placeholder="add description" name="description" defaultValue={desciption    ??undefined}/>
                  <SaveButton />
                 </form>
                 </>
    )
}