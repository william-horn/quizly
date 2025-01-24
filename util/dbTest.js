"use server";
import { connectToDB } from "./database";

export const testdb = async () => {
  console.log("connecting...");
  await connectToDB();
  console.log("finished connecting");
};
