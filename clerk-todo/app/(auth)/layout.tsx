import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AuthLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
    redirect("/home");
  }
  return (
    <div className=" bg-zinc-900 min-h-screen w-full flex justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;
