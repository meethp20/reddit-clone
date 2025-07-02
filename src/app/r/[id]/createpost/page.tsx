"use client"
import { Card, CardHeader } from "@/components/ui/card";
import pic from "../../../../../public/pfp.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text, Video } from "lucide-react";
import { TabsContent } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Tiptap from "@/app/components/TipTabEditor";
import { UploadDropzone } from "@/app/components/UploadThing";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { use } from 'react';


const rules = [
  {
    id: 1,
    text: "be peacefull",
  },
  {
    id: 2,
    text: "dont be rude",
  },
  {
    id: 3,
    text: "dont copy",
  },
  {
    id: 4,
    text: "dont just post anything ",
  },
  {
    id: 5,
    text: "gurpreet daddy sabka",
  },
];

export default function CreateRoute({ params }: { params: Promise<{ id: string }> }) {
   
   const { id } = use(params);
  return (
    <div className="max-w-[1000px]  mx-auto flex gap-x-10 mt-4 ">
      {/* // first box */}
      <div className="w-[65%]  ">
        <p className="font-bold">
          {" "}
          SubReddit:
          <span className="">
            r/
            <Link className="text-primary" href={`/r/${id}`}>
              {id}
            </Link>
          </span>
        </p>

        <Tabs defaultValue="post" className="w-full my-3">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">
              {" "}
              <Text /> Post
            </TabsTrigger>
            <TabsTrigger value="image">
              <Video />
              Image and Video
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <Card className="flex flex-row items-center">
              <form>
                <CardHeader className="min-w-[500px]">
                  <Label>Title</Label>
                  <Input
                    className=" max-w-[200px] lg:max-w-full  my-3 "
                    name="title"
                    required
                    placeholder="Title"
                  />
                  <Tiptap />
                </CardHeader>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="image">
            <UploadDropzone
            onClientUploadComplete={(res)=>{
                console.log(res)
            }}
              endpoint="imageUploader"
              onUploadError={(error: Error) => {
                alert("error");
              }}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* // second box */}
      <div className="w-[35%] ">
        <Card>
          <div className="lg:flex mx-3 gap-y-3 items-center gap-x-3 ">
            <Image src={pic} className="" width={70} alt="reddit" height={70} />
            <h1> r/{id}</h1>
          </div>

          <Separator />
          <div>
            {rules.map((item) => (
              <div key={item.id} className="p-3 font-medium text-sm">
                <p className="ml-5">
                  {item.id}. {"   "}
                  {item.text}
                </p>
                <Separator className="mt-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
