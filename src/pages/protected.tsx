import { UserButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import { api } from "../utils/api";

const Protected: NextPage = () => {
  const { data: user1 } = api.example.getUser1.useQuery();
  const { data: user2 } = api.example.getUser2.useQuery();
  const { data: user3 } = api.example.getUser3.useQuery();


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welcome to the 
          <span className="text-[hsl(280,100%,70%)]">Protected</span> Page
        </h1>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">{user1}</h2>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">{user2}</h2>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">{user3}</h2>
        <p className="text-2xl text-white">Click this User Button!</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
};

export default Protected;
