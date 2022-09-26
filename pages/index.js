import Link from "next/link";
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className={styles.container}>
     <Stack spacing={4} direction="row">
            <Link href="/about" passHref>
                <Button variant="contained" color="secondary">About</Button>
             </Link>{" "} 
             <Link href="/contact" passHref>
                <Button variant="contained" color="secondary">Contact</Button>
             </Link>{" "}  
            <Button variant="contained" onClick={signOut}>logOut</Button>
    </Stack>
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



