import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { RadioButtonGroup } from "@/components/RadioButtonGroup";
import { UsersTable } from "@/components/UsersTable";
import { getUsersAction } from "@/lib/actions";
import Link from "next/link";

export default async function Home() {
  const users = await getUsersAction();
  return (
    <main className="px-7 py-3 space-y-4">
      <h2 className="text-3xl font-bold text-center">Панель Администратора</h2>
      <div className="flex items-center justify-between">
        <Link href="/create-user">
          <ButtonWithIcon />
        </Link>
        <RadioButtonGroup />
      </div>
      <UsersTable users={users} />
    </main>
  );
}
