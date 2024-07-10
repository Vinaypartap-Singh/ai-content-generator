"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function FormSection({
  selectedTemplate,
  userFormInput,
  loading,
}: any) {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className="border p-5 rounded-md">
      <Image
        src={selectedTemplate?.icon}
        alt="Content Logo"
        width={50}
        height={50}
      />
      <h2 className="text-2xl font-bold my-2">{selectedTemplate?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((data: any, index: number) => {
          return (
            <div className="flex flex-col gap-5" key={index}>
              <label className="mt-3">{data.label}</label>
              {data.field == "input" ? (
                <Input
                  className="border"
                  name={data?.name}
                  required={data?.required}
                  onChange={handleInputChange}
                />
              ) : data.field == "textarea" ? (
                <Textarea
                  className="border"
                  name={data?.name}
                  onChange={handleInputChange}
                />
              ) : null}
            </div>
          );
        })}

        <Button
          disabled={loading}
          type="submit"
          className="w-full bg-primary text-white mt-5"
        >
          {loading ? "Generating" : "Generate Content"}
        </Button>
      </form>
    </div>
  );
}
