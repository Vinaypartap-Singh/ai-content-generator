"use client";
import {
  BotMessageSquare,
  FileClock,
  HomeIcon,
  Settings,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidenav() {
  const path = usePathname();
  const menuList = [
    {
      name: "Home",
      icon: <HomeIcon className="h-5 w-5" />,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: <FileClock className="h-5 w-5" />,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: <WalletCards className="h-5 w-5" />,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="min-h-screen h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        {/* <Image src={"/logo.svg"} alt="Logo" width={100} height={100} /> */}
        <h4 className="font-bold flex items-center gap-2">
          <BotMessageSquare /> Insightbot
        </h4>
      </div>
      <div className="mt-6">
        {menuList.map((data, index) => {
          return (
            <div
              className={`flex items-center gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${
                path === data.path && "bg-primary text-white"
              }`}
              key={index}
            >
              {data.icon} {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
