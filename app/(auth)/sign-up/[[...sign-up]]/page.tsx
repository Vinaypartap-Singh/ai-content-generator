import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <SignUp />
    </main>
  );
}
