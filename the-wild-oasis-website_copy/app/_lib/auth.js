import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      scope: "openid email profile",
    }),
  ],
  callbacks: {
    async authorized({ auth, request }) {
      console.log("Auth object:", auth);
      // USE !! to convert any value to a boolean
      // means if auth.user exists return true else return false
      return !!auth?.user;
    },
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log("User email:", user.email);
        const exisitingGuest = await getGuest(user.email);
        if (!exisitingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true; // Return true to allow sign-in
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Return false to deny sign-in
      }
    },
    // Add the guestId to the session
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      // add id to the session
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
