'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SubRedditPage() {
  return (
    <div className=" lg:w-[1000px] w-[400px] mx-auto ">
      <h1 className=" lg:text-3xl my-3 text-xl tracking-tighter font-extrabold">
        Create Community
      </h1>
      <Separator />
      <div className="py-2 px-3">
        <Label className="text-lg ">Name</Label>
        <p className="text-muted-foreground">
          The community names cannot be changed again
        </p>
      </div>
      <div className="relative">
        <p className="absolute pb-1 w-8 left-0 h-10 items-center justify-center flex  ">
          r/
        </p>
        <Input className="lg-[600px] pl-7" min={3} maxLength={21} />
         <div className="py-3 flex justify-end gap-x-2">
          <Button asChild variant="secondary"><Link href="/">Cancel</Link></Button>
          <Button >Change</Button>
         </div>
      </div>
    </div>
  );
}
