"use server";
// MongoDB imports
import { connectToDB } from "./database";
import { decodeMongoData } from "./decodeMongoData";

// Models
import User from "@/models/user";

// Auth
import { signIn, auth } from "@/auth";

export const doSignIn = async () => {
  console.log("signing in...");
  const y = await auth();
  console.log("session: ", y);

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
