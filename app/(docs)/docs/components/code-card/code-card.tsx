"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/app/(docs)/docs/components/code-card/parts/code-highlight";
import { cn } from "@/lib/utils";

interface CodeCardProps {
  children?: React.ReactNode;
  code?: string;
  className?: string;
}
const CodeCard = ({ children, code, className }: CodeCardProps) => {
  return (
    <Tabs defaultValue="preview" className={cn(className)}>
      <TabsList>
        <TabsTrigger value="preview" className="font-semibold font-regular">Preview</TabsTrigger>
        <TabsTrigger value="code"  className="font-semibold font-regular">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="rounded-md border-2 mt-4">
        {children}
      </TabsContent>
      <TabsContent value="code" className="rounded-md  border-2 mt-4">
        <CodeHighlight code={code} inTab />
      </TabsContent>
    </Tabs>
  );
};

export default CodeCard;
