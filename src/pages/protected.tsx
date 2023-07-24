import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import { api } from "../utils/api";

const Protected: NextPage = () => {
  const utils = api.useContext();

  const { data: user } = api.example.getUser.useQuery();
  const { data: orgSlug } = api.example.getOrgSlug.useQuery();
  const { data: orgId } = api.example.getOrgId.useQuery();

  const invalidate = () => {
    utils.example.getUser.invalidate();
    utils.example.getOrgSlug.invalidate();
    utils.example.getOrgId.invalidate();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welcome to the 
          <span className="text-[hsl(280,100%,70%)]">Protected</span> Page
        </h1>
        <h3 className="text-2xl text-white">userId: {user}</h3>
        <h3 className="text-2xl text-white">orgSlug: {orgSlug}</h3>
        <h3 className="text-2xl text-white">orgId: {orgId}</h3>
        <button className="bg-white" onClick={() => invalidate()}>Invalidate TRPC</button>
        <p className="text-2xl text-white">
        Switch Org
        <OrganizationSwitcher
            afterSwitchOrganizationUrl="/protected"
            hidePersonal
            appearance={{
                elements: {
                    rootBox: {
                        backgroundColor: "white",
                    },
                    organizationPreviewAvatarContainer: {
                        display: "none",
                    },
                },
            }}
        />
        </p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
};

export default Protected;
