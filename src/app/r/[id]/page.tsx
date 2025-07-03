"use server";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import prisma from "@/app/lib/db";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Separator } from "@/components/ui/separator";
import { Subdescription } from "@/app/components/SubDesciptionForm";
import { Cake } from "lucide-react";
import { Button } from "@/components/ui/button";

async function getData(name: string) {
  if (name == null || undefined) return;
  const data = await prisma.subreddit.findUnique({
    where: {
      name: name,
    },
    select: {
      name: true,
      description: true,
      createdOn: true,
      userId: true,
    },
  });
  return data;
}
export default async function SubRedditPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="lg:w-[1000px] flex mx-auto ">
      <div className="w-[65%] flex flex-col gap-y-5">
        <h1></h1>
      </div>

      <div className="w-[35%]  ">
        <form action="">
        <Card className="rounded-xl   ">
          <div className="bg-gray-600 ">
            <CardHeader className="font-extrabold  mt-2.5  top-0">
              <CardTitle>  Community</CardTitle>
            
            </CardHeader>
            <Separator className=" mt-5" />
          </div>

          <div className="p-4 flex items-center gap-x-4">
            <Image
              className="rounded-full"
              src={`https://avatar.vercel.sh/rauchg`}
              height={60}
              alt="Image of Subreddit"
              width={60}
            />
            <Link href="/" className="font-medium tracking-tighter">
              r/{data?.name}
            </Link>
          </div>
          {user?.id === data?.userId ? (
            <div className="lg:ml-5 lg:w-[300px]  gap-y-2">
              <CardDescription>
              <Subdescription
                desciption={data?.description}
                subName={params.id}
              />
              </CardDescription>
            </div>
          ) : (
            <p className=" text-sm  text-secondary-foreground mx-7 font-normal">
              {data?.description}
            </p>
          )}
         <p className="text-sm flex flex-row items-center justify-center text-zinc-500  mx-7 font-normal">
               <Cake className="text-zinc-500" />  created: {data?.createdOn
                  ? new Date(data.createdOn).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "Unknown date"}
              </p>
              <Separator/>
              <Button className="lg:ml-5 lg:w-[300px]  " asChild><Link href={user?.id ? `/r/${data?.name}/createpost ` : `/api/auth/login`} >Create Posts</Link></Button>
        </Card>
        </form>
      </div>
    </div>
  );
}
