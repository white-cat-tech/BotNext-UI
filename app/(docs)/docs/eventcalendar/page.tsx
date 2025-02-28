import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import Link from "next/link";
import EventCalendar from "./demoevent";
import { Snippet } from "@/components/snippet";
import Usage from "../components/usage";

const page = () => {
  return (
    <div>
      <PageTemplate title="Event Calendar" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/eventcalendar/demoevent.tsx">
          <EventCalendar />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <div className="p-4 ">
        <p className="mb-4">
          Create a new file called <code>Eventcalendar.tsx</code> in the
          {" components"} & install the following components
        </p>
        <Snippet
          text="npx shadcn@latest add input button dialog label
"
          width="500px"
        />
        </div>

        <Steppers
          className=""
          installScript="npm i lucide-react framer-motion date-fns
 "
          
          withInstall
          codePath="lib/utils.ts"
        />

      
      </PageTemplate>
    </div>
  );
};

export default page;
