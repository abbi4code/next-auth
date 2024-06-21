"use client"
import { signIn,signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Appbar = () =>{
  const session = useSession()
    return (
      <div>
        <button onClick={() => signIn()}>signin</button>
        <button onClick={() => signOut()}>signout</button>
        {JSON.stringify(session)}
      </div>
    );
}

export default Appbar

