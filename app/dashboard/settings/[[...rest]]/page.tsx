import { UserProfile } from "@clerk/nextjs";

export default function Settings() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center h-full">
      <UserProfile />
    </div>
  );
}
