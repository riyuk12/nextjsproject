import nextAuth from "next-auth";
import NextAuth from "next-auth/next";

import GoogleProvider from 'next-auth/providers/google'

console.log({
    id:process.env.GOOGLE_ID,
    secret:process.env.GOOGLE_CLIENT_SECRET
})


const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){

    },
    async signIn({profile}){

    }

})

export {handler as GET, handler as POST}