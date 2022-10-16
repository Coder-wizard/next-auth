import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "6a850ef8356e9aed0449",
      clientSecret: "e7a49ec111760634583be68a0a760e55e4f45b5b",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
