'use client'
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { updateUserName } from "../actions";
import { SubmitButton } from "./SubmitButton";
import { useEffect } from "react";
import { toast  } from "sonner";
import { useState } from "react";
import { useActionState } from "react";

const initialState = {
    message: "",
    success: false
};

export default function SettingsForm({userName}:{userName:string|null|undefined}){
     const[state,formAction]=useActionState(updateUserName, initialState)
     const [isError,setIsError]=useState(false)

     useEffect(()=>{
        if(state.message) {
            if(state.success){
                toast.success(state.message)
            } else {
                toast.error(state.message)
                setIsError(true)
            }
        }
     },[state])
    return(
        <div className="mx-10 md:mx-4 ">


            <h1 className="text-3xl sm:mx-2  font-extrabold tracking-tight">
                Settings
                </h1>

            <Separator className="my-4 " />

            <div className="flex flex-row lg:mx-10 items-center gap-x-4">
              <form action={formAction} className="flex flex-row lg:mx-10 items-center gap-x-4">
               <h1 
               className="font-bold tracking-wide"
               >UserName
               </h1> 
               <Input 
               placeholder="userName"
               onChange={()=>setIsError(false)}
               required
               name="username"
               defaultValue={userName||undefined}
               maxLength={21}
               className="mt-2 lg:mx-4  w-[300px] md:w-[300px] lg:w-[700px]"
               />
              <SubmitButton  text="Edit" />
               </form>
            </div>
            <div>{isError && <p className="lg:mx-48 lg:mt-3 text-red-800">this username has been taken</p> }</div>
            
        </div>
    )
}