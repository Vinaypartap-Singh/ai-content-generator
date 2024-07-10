import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <SignIn />
    </main>
  );
}
