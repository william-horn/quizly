"use server";
import { auth, signOut, signIn } from "@/auth";

const requestSignIn = async () => {
  const response = await signIn("google");
  // const session = await auth();

  console.log("SIGNING IN");
  console.log("signed in: ", response);

  return response;
};

export const getSession = async () => {
  const session = await auth();

  return session;
};

export default requestSignIn;
