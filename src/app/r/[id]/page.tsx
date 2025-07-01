
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import prisma from "@/app/lib/db";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { SaveButton, SubmitButton } from "@/app/components/SubmitButton";
import { updateDescription } from "@/app/actions";
import { useActionState } from "react";

async function getData(name:string){
  if(name==null||undefined) return
    const data = await prisma.subreddit.findUnique({
        where:{
            name:name,
        },
        select:{
            name:true,
            description:true,
            createdOn:true,
            userId:true,
        }
    })
    return data
}

export  default async function SubRedditPage({params}:{params:{id: string}}) {
 const data = await getData(params.id)
 const {getUser} = getKindeServerSession();
 const user = await getUser();
  const [state,formAction] = useActionState(updateDescription,null)
 
    return (
    <div className="lg:w-[1000px] flex mx-auto ">
      <div className="w-[65%] flex flex-col gap-y-5">
           <h1></h1>
      </div>

       <div className="w-[35%]  ">
        <Card className="rounded-xl mb-3 relative " > 
          <div className="">
            <CardHeader className="font-extrabold  mt-2.5 absolute top-0">Community</CardHeader>
            <Separator className=" mt-5" />
            </div>

             <div className="p-4 flex items-center gap-x-4">
            <Image className="rounded-full"  src={`https://avatar.vercel.sh/rauchg`} height={60} alt="Image of Subreddit" width={60} />
            <Link href="/" className="font-medium tracking-tighter">r/{data?.name}</Link>
            </div>
            { user?.id===data?.userId ?(
              <div className="lg:ml-5 lg:w-[300px]  gap-y-2">
                 <form action={formAction}>
                  <input  hidden defaultValue={params.id|| ''} name="subName" />
                  <Textarea className="  " placeholder="add description" name="description"/>
                  <SaveButton />
                 </form>
                 </div>
            ):(
               <p className=" text-sm  text-secondary-foreground mx-7 font-normal">
             {data?.description}
             </p>
            ) }
             <p className=" text-sm  text-secondary-foreground mx-7 font-normal">
             {data?.description}
             </p>

           
        </Card>
      </div>
    </div>
  );
}
