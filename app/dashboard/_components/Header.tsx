import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="p-5 border-b flex justify-between items-center sticky top-0 bg-white z-10">
      <div>
        {/* <h2 className="p-2 px-6 bg-primary rounded-full text-white w-fit text-xs cursor-pointer">
          Join Membership just for $9.99/month 5 Ways to Use AI Content Generation for Your Business
        </h2> */}
        <h2 className="p-2 px-6 bg-primary rounded-full text-white w-fit text-xs cursor-pointer">
          Use Artificial Intelligence To Improve Content
        </h2>
      </div>
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
        {/* <Search className="h-5 w-5" />
        <input type="text" placeholder="Search" className="outline-none" /> */}
        <UserButton />
      </div>
    </div>
  );
}
