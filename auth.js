import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// const GOOGLE_CLIENT_ID = process.env.AUTH_GOOGLE_ID;
// const GOOGLE_CLIENT_SECRET = process.env.AUTH_GOOGLE_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("account: ", account);
      console.log("profile: ", profile);

      return true;
    },
  },
});
