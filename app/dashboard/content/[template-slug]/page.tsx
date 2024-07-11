"use client";

import Templates from "@/app/(data)/Templates";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { chatSession } from "@/utils/AiModel";
import { useState } from "react";
import { db } from "@/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";

interface props {
  params: {
    "template-slug": string;
  };
}

// Create history feature use firebase here and also use env features

export default function TemplateEditor(props: props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>();
  const { user } = useUser();
  const selectedTemplate = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const GenerateAiContent = async (formData: any) => {
    setLoading(true); // Set loading state to true
    const SelectedPrompt = selectedTemplate?.aiPrompt; // Get the selected AI prompt
    const finalPrompt = JSON.stringify(formData) + ", " + SelectedPrompt; // Combine formData and the selected prompt

    try {
      const response = await chatSession.sendMessage(finalPrompt); // Send the message to the chat session
      const aiOutput = response?.response.text(); // Get the AI response text
      setAiOutput(aiOutput); // Set the AI output state
      await SaveToDB(
        formData,
        selectedTemplate?.slug,
        aiOutput,
        selectedTemplate?.name
      ); // Save the data to the database
    } catch (error) {
      console.error("Error generating AI content: ", error); // Log any errors
      alert(error); // Alert the user about the error
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  // Save data to the database
  const SaveToDB = async (
    formData: any,
    slug: any,
    aiOutput: any,
    templateName: any
  ) => {
    const docRef = doc(db, "users", `${user?.id}`); // Reference to the user's document
    const docSnap = await getDoc(docRef); // Get the document snapshot

    if (docSnap.exists()) {
      const userData = docSnap.data(); // Get the existing user data
      await updateDoc(docRef, {
        history: [
          ...userData.history, // Include existing history
          {
            formdata: formData,
            templateSlug: slug,
            aiResponse: aiOutput,
            selectedTemplateName: templateName,
            createdAt: new Date(), // Fix typo: createAt -> createdAt
          },
        ],
      });
    } else {
      // Document does not exist, create a new document
      await setDoc(docRef, {
        userId: user?.id,
        emailId: user?.primaryEmailAddress?.emailAddress,
        history: [
          {
            formdata: formData,
            templateSlug: slug,
            aiResponse: aiOutput,
            selectedTemplateName: templateName,
            createdAt: new Date(), // Fix typo: createAt -> createdAt
          },
        ],
      });
    }
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
