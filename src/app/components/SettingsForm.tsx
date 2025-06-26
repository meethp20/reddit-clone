import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { updateUserName } from "../actions";
import { SubmitButton } from "./SubmitButton";

export default function SettingsForm({userName}:{userName:string|null|undefined}){

    return(
        <div className="mx-10 md:mx-4 ">


            <h1 className="text-3xl sm:mx-2  font-extrabold tracking-tight">
                Settings
                </h1>

            <Separator className="my-4 " />

            <div className="flex flex-row lg:mx-10 items-center gap-x-4">
              <form action={updateUserName} className="flex flex-row lg:mx-10 items-center gap-x-4">
               <h1 
               className="font-bold tracking-wide"
               >UserName
               </h1> 
               <Input 
               placeholder="userName"
               required
               name="username"
               defaultValue={userName||undefined}
               maxLength={21}
               className="mt-2 lg:mx-4  w-[300px] md:w-[300px] lg:w-[700px]"
               />
              <SubmitButton />
               </form>
            </div>
            
        </div>
    )
}