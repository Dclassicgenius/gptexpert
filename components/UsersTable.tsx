import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SelectUser } from "@/db/schemas/users";

// const users = [
//   {
//     name: "Иван Иванов",
//     email: "ivan.ivanov@example.com",
//     status: "Активен",
//     registrationDate: "2023-08-01",
//   },
//   {
//     name: "Мария Смирнова",
//     email: "maria.smirnova@example.com",
//     status: "Неактивен",
//     registrationDate: "2023-07-15",
//   },
//   {
//     name: "Алексей Петров",
//     email: "alexey.petrov@example.com",
//     status: "Заблокирован",
//     registrationDate: "2023-06-20",
//   },
//   {
//     name: "Ольга Сидорова",
//     email: "olga.sidorova@example.com",
//     status: "Активен",
//     registrationDate: "2023-05-30",
//   },
//   {
//     name: "Дмитрий Кузнецов",
//     email: "dmitry.kuznetsov@example.com",
//     status: "Активен",
//     registrationDate: "2023-04-12",
//   },
//   {
//     name: "Наталья Ковалева",
//     email: "natalya.kovaleva@example.com",
//     status: "Неактивен",
//     registrationDate: "2023-03-25",
//   },
//   {
//     name: "Сергей Морозов",
//     email: "sergey.morozov@example.com",
//     status: "Активен",
//     registrationDate: "2023-02-14",
//   },
//   {
//     name: "Екатерина Никитина",
//     email: "ekaterina.nikitina@example.com",
//     status: "Заблокирован",
//     registrationDate: "2023-01-10",
//   },
//   {
//     name: "Андрей Фролов",
//     email: "andrey.frolov@example.com",
//     status: "Активен",
//     registrationDate: "2022-12-01",
//   },
//   {
//     name: "Татьяна Васильева",
//     email: "tatyana.vasileva@example.com",
//     status: "Неактивен",
//     registrationDate: "2022-11-05",
//   },
// ];

export function UsersTable({ users }: { users: SelectUser[] }) {
  return (
    <Table>
      <TableCaption>Список Пользователей.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Имя Пользователя</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead className="text-right">Дата Регистрации</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell className="text-right">{user.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
