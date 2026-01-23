import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex p-20">
      <div className="h-[50vh] w-full flex flex-col items-center justify-center">
        <div className="text-5xl bg-gray-50 border-2 rounded-xl p-40">
          <div>Home Page</div>
          <div className=" flex gap-3 items-center justify-center mt-10">
            <Button asChild>
              <SignInButton />
            </Button>
            <Button asChild>
              <SignUpButton />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
