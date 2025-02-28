import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import { Chart } from "./animateddemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Animated SVG Chart" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/animatedchart/animateddemo.tsx">
          <Chart/> 
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
        Edit tailwind.config.ts to add background grid
        </p>
        <Steppers
          className=""
          
          installScript="npm i framer-motion mini-svg-data-uri"
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="lib/sample.ts"
        />
        
      </PageTemplate>
    </div>
  );
};

export default page;
