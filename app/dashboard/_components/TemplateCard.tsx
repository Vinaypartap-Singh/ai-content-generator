import Image from "next/image";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

export default function TemplateCard(data: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${data.slug}`}>
      <div className="p-5 shadow-sm rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={data.icon} alt="Image" width={50} height={50} />
        <h2 className="font-medium text-md">{data.name}</h2>
        <p className="text-gray-500 line-clamp-2">{data.desc}</p>
      </div>
    </Link>
  );
}
