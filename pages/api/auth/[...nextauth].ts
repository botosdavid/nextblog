import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    
        secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
        providers: [
            GithubProvider({
                clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
                clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
            }),
            GoogleProvider({
                clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
                clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
                authorization: {
                    params: {
                      prompt: "consent",
                      access_type: "offline",
                      response_type: "code"
                    }
                  }
              })
            // ...add more providers here
        ],
    
}

export default NextAuth(options)