"use server";
import { connectToDB } from "./database";
import User from "@/models/user";

export const testdb = async () => {
  console.log("connecting...");
  await connectToDB();
  // const data = await User.findOne();
  // console.log("got data: ", data);
  console.log("finished connecting");
};
