import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
	pages: {
		signIn: "/login",
		signOut: { redirect: false },
		// error: '/authentication/NotFound',
	},

	providers: [
		CredentialsProvider({
            email:'Credentials',
            password:'Credentials',
			async authorize(credentials, req) {
				const res = await fetch("http://localhost:5000/user/login", {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				});
				const user = await res.json();
				if (res.ok && user) {
					return user;
				}	

            /* hardcode */

            // if (credentials.email == "abc" && credentials.password == "123"){
            //     return{
            //             user: {
            //                 name: "ABC"
            //             }
            //     }
            // } 
            return null;
          }

		})
	],

	secret: process.env.JWT_SECRET,

	callbacks: {

		async jwt({ token, user, account }) {
			let success = user?.id > 0
			if (account && success) {
				return {
					...token,
					user: user,
					accessToken: user.id
				};
			}
			return token;
		},

		async session({ session, token }) {
			session.user = token;
			return session;
		},
	},
}

export default NextAuth(authOptions)