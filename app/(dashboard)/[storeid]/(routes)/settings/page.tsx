import { SettingsForm } from "@/components/settings-form";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";



const SettingsPage = async ({
  params
}: {
  params: { storeid: string }
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await  prismadb.store.findFirst({
    where: {
      id: params.storeid,
      userId
    }
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store}/>
      </div>
    </div>
  );
}

export default SettingsPage;