import Link from "next/link";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";

export default function about(props) {
  return (
    <>
        <Link href="/" passHref>
                <Button variant="contained" color="secondary">Home</Button>
        </Link>{" "} 
        <Button variant="contained" onClick={signOut}>logOut</Button>
      <h2> This is contact </h2>
    </>
  );
}