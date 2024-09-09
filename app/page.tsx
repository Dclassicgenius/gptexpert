import Dashboard from "@/components/Dashboard";
import { SelectUser } from "@/db/schemas/users";
import { getUsersAction } from "@/lib/actions";

export default async function Home() {
  const users = (await getUsersAction()) as SelectUser[];
  return (
    <main className="px-7 py-3 space-y-4">
      <h2 className="text-3xl font-bold text-center">Панель Администратора</h2>

      <Dashboard users={users} />
    </main>
  );
}
