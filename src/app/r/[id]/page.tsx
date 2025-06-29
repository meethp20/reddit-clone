import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import prisma from "@/app/lib/db";
import Link from "next/link";

async function getData(name:string){
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
}

export  default async function SubRedditPage({params}:{params:{id: string}}) {
 const data = getData(params.id)

    return (
    <div className="lg:w-[1000px] flex mx-auto ">
      <div className="w-[65%] flex flex-col gap-y-5">
           <h1>hello</h1>
      </div>
5
       <div className="w-[35%]  ">
        <Card className="rounded-xl mb-3 " > 
            <CardHeader className=" ">Community</CardHeader>
            <div className="p-4 flex items-center gap-x-4">
            <Image className="rounded-full"  src={`https://avatar.vercel.sh/rauchg`} height={60} alt="Image of Subreddit" width={60} />
            <Link href="/" className="font-medium tracking-tighter">r/GurpreetSub</Link>
            </div>
        </Card>
      </div>
    </div>
  );
}
