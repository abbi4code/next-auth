
import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";
import { NEXT_URL } from "./api/lib/auth";

export default async function Home() {
  const session =await getServerSession(NEXT_URL)
  return (
    <div>
      <Appbar/>
      {JSON.stringify(session)}

      
    </div>
  );
}
