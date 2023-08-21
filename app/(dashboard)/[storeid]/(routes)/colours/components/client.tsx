"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, ColourColumn } from "./columns";

interface ColoursClientProps {
  data: ColourColumn[];
}

export const ColoursClient: React.FC<ColoursClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Colours (${data.length})`} description="Manage the colours for your store" />
        <Button onClick={() => router.push(`/${params.storeid}/colours/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable filterKey="name" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Colours" />
      <Separator />
      <ApiList entityName="colours" entityIdName="colourId" />
    </>
  );
};