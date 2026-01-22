import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ArrowUpIcon } from "lucide-react";

function WorkspacePage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-200 p-20 flex flex-col justify-center items-center">
      <div className="flex justify-center mb-15 items-center  gap-3">
        <input
          type="text"
          className="bg-gray-100 flex rounded-2xl border-2 border-gray-300 w-100 h-10 p-5 "
        ></input>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full"
        >
          <ArrowUpIcon />
        </Button>
      </div>

      <div className="bg-gray-100 rounded-3xl w-1/2 h-[65vh]"></div>
      <div className="absolute top-10 right-10">
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspacePage;
