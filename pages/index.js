import Link from "next/link";
import styles from '../styles/Home.module.css'
// import { unstable_getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]";
export default function Home() {
  return (
    <div className={styles.container}>
      <nav>
            <Link href="/about"> About </Link>{" "} &nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/contact"> Contact </Link>{" "}      
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js
        </h1>
        <p className={styles.description}>
          Hello  to 
          NextAuth Authentication
        </p>
      </main>

    </div>
  )
}


// export async function getServerSideProps(context) {
//   const session = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authOptions
//   );
//   context.res.setHeader(
// 	'Cache-Control',
// 	'public, s-maxage=10, stale-while-revalidate=59'
//   )

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/about",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {

//     },
//   };
// }
