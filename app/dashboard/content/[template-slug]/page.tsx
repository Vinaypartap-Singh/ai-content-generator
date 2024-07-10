"use client";

import Templates from "@/app/(data)/Templates";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { chatSession } from "@/utils/AiModel";
import { useState } from "react";

interface props {
  params: {
    "template-slug": string;
  };
}

// Create history feature use firebase here and also use env features

export default function TemplateEditor(props: props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>();
  const selectedTemplate = Templates?.find(
    (item) => item.slug == props.params["template-slug"],
  );

  const GenerateAiContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    console.log(process.env.GEMINI_API);
    const response = await chatSession.sendMessage(finalPrompt);
    setAiOutput(response?.response.text());
    setLoading(false);

    // Push History to database here
  };

  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-5 p-5 max-w-6xl m-auto">
      {/* Form Section */}
      <FormSection
        selectedTemplate={selectedTemplate}
        loading={loading}
        userFormInput={(formData: any) => GenerateAiContent(formData)}
      />

      {/* Output Section */}
      <OutputSection aiOutput={aiOutput} />
    </div>
  );
}
