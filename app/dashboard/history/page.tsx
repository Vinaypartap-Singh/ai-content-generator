"use client";

import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function History() {
  const { user } = useUser();
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", `${user?.id}`);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
      }
    };

    getData();
  }, [user?.id, db]);

  console.log(userData?.history);

  return (
    <div>
      <Table className="">
        <TableCaption className="font-bold">Your recent requests</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Template</TableHead>{" "}
            {/* Increased width for better readability */}
            <TableHead className="w-[300px]">Ai Response</TableHead>{" "}
            {/* Fixed width for Ai Response */}
            <TableHead className="w-[100px]">Date</TableHead>{" "}
            {/* Fixed width for Date */}
            <TableHead className="text-right w-[200px]">
              Template URL
            </TableHead>{" "}
            {/* Fixed width for Template URL */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData?.history.map((data: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium w-[200px]">
                {data.selectedTemplateName}
              </TableCell>
              <TableCell className="w-[300px]">{data.aiResponse}</TableCell>
              <TableCell className="w-[100px]">
                {data.createdAt.toDate().toLocaleString()}
              </TableCell>
              <TableCell className="text-right w-[200px]">
                {data.templateSlug}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
