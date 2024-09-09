import { Modal } from "@/components/Modal";
import { UserForm } from "@/components/UserForm";
import { SelectUser } from "@/db/schemas/users";
import { getUserAction } from "@/lib/actions";

const Page = async ({ params }: { params: { userId: string } }) => {
  const userId = params.userId;
  const user = (await getUserAction(parseInt(userId))) as SelectUser;

  if (!user) {
    return (
      <Modal>
        <p>Пользователь не найден</p>
      </Modal>
    );
  }

  return (
    <Modal>
      <h2 className="text-3xl font-bold text-center">{user.fullName}</h2>
      <UserForm user={user} />
    </Modal>
  );
};

export default Page;
