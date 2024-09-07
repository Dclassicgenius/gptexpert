import { UserForm } from "@/components/UserForm";

const page = () => {
  return (
    <div className="mx-auto max-w-lg pt-5">
      <h1 className="text-3xl font-bold text-center">Создание пользователя</h1>
      <UserForm />
    </div>
  );
};

export default page;
