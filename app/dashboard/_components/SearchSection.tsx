import { Search } from "lucide-react";

export default function SearchSection({ onSearchInput }: any) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-20 text-center text-white flex flex-col items-center space-y-3">
      <h1 className="text-3xl md:text-4xl font-bold">Browse All Templates</h1>
      <p>What would you like to create today ?</p>
      <div className="flex gap-2 items-center bg-white p-2 border rounded-md max-w-7xl w-full">
        <Search className="h-5 w-5 text-black" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full text-black"
          onChange={(e) => onSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
}
