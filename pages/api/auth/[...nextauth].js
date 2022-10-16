import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "6a850ef8356e9aed0449",
      clientSecret: "e7a49ec111760634583be68a0a760e55e4f45b5b",
    }),
    GoogleProvider({
      clientId:
        "230724927544-t6cd0i643fmee918djqovejsq10h06se.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
