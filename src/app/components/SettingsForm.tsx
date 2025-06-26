import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SettingsForm({userName}:{userName:string|null|undefined}){

    return(
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
            <Separator className="my-4 " />
            <div className="flex flex-row items-center gap-x-4">
               <h1 className="font-bold tracking-wide">UserName</h1> 
                
               <Input 
               placeholder="userName"
               defaultValue={userName||undefined}
               
            
               />
            </div>
            
        </div>
    )
}