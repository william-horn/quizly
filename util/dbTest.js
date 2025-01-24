"use server";
// MongoDB imports
import { connectToDB } from "./database";
import { decodeMongoData } from "./decodeMongoData";

// Models
import User from "@/models/user";

// Auth
import { signIn } from "@/auth";

export const doSignIn = async () => {
  console.log("signing in...");
  const res = await signIn("google");
  console.log("signed in: ", res);
};

export const testdb = async () => {
  console.log("connecting...");
  await connectToDB();
  const data = await User.findOne();
  console.log("got data: ", data);
  console.log("finished connecting");

  return decodeMongoData(data);
};
