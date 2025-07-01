"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { Prisma } from "@prisma/client";
type ActionResult = {
  message:string,
  success:boolean
} | undefined
export async function updateUserName(prevState: any, formData: FormData) {
  //get data
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  //check if data is empty or not
  if (!user) {
    return redirect(" /api/auth/creation");
  }
  //from form input from username i hope it will be connnected
  const username = formData.get("username") as string;
  // now update this username in the db and return a message
  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        userName: username,
      },
    });
    return {
      message: "Username updated successfully!",
      success: true,
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          message: "This username is already taken",
          success: false,
        };
      }
    }
    return {
      message: "An error occurred while updating username",
      success: false,
    };
  }
}

export async function createCommunity(prevState: any,formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/creation");
  }

  try{const name = formData.get("name") as string


  // Add validation
  if (!name ) {
    return {
      message: "Name and description are required",
      success: false,                                                                   
    };
  }

  const subreddit = await prisma.subreddit.create({
    data:{
        name:name,
        userId:user.id,
    },
  });
  return{ 
    message:"Community created",
    success:true,
    
  }
}catch(err){
  if(err instanceof Prisma.PrismaClientKnownRequestError){
    if(err.code==='P2002'){
      return {
        message:"this name is already used",
        success:false,
      }
    }
  }
  return {
      message: "An error occurred while updating username",
      success: false,
    };
}}


export async function updateDescription(
  prevState:ActionResult,
  formData: FormData
) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return { message: "Not authenticated", success: false };

  const subName = formData.get("subName") as string;
  const desc = formData.get("description") as string;
  try {
    await prisma.subreddit.update({
      where: { name: subName },
      data: { description: desc },
    });
    return { message: "Description updated!", success: true };
  } catch (e) {
    return { message: "Failed to update description", success: false };
  }
}
