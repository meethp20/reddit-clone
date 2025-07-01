import { Card } from "@/components/ui/card";
import pic from "../../../../../public/pfp.png"
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Item } from "@radix-ui/react-dropdown-menu";


const rules=[
    {
        id:1,
        text:"be peacefull",
    },
    {
        id:2,
        text:"dont be rude",
    },
     {
        id:3,
        text:"dont copy",
    },
     {
        id:4,
        text:"dont just post anything "
    },
     {
        id:5,
        text:"gurpreet daddy sabka",
    },
]

export default function CreateRoute(
    {params} : {
        params :{id:string}
    }
){

    return(
        <div className="max-w-[1000px]  mx-auto flex gap-x-10 mt-4 ">
            {/* // first box */}
            <div className="w-[65%] ">
                    
            </div>

            // second box
            <div className="w-[35%] ">
               <Card >
                <div className="flex items-center gap-x-3 ">  
                    <Image src={pic} className="" width={70} alt="reddit" height={70}  />
                    <h1> r/{params.id}</h1>
                </div>

                <Separator/>
              <div>
                {rules.map((item)=>(

                    <div key={item.id} className="p-3 font-medium text-sm">
                          <p className="ml-5">{item.id}. {"   "}{item.text}</p>
                           <Separator className="mt-2" />
                    </div>
                   
                   ))}

              </div>

               </Card>

            </div>

        </div>
    )
}