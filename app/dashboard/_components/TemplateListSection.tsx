"use client";

import Templates from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: { label: string; field: string; name: string; required?: boolean }[];
  backgroundColor: string;
}

export default function TemplateListSection({ searchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (searchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [searchInput]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
      {templateList.map((data: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...data} />
      ))}
    </div>
  );
}
