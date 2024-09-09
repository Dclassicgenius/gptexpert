"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SelectUser } from "@/db/schemas/users";
import { X, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TableHeaderCell } from "./TableHeaderCell";
import { headers } from "@/constants";

export function UsersTable({ users }: { users: SelectUser[] }) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const router = useRouter();

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortConfig) {
      let aValue = a[sortConfig.key as keyof SelectUser];
      let bValue = b[sortConfig.key as keyof SelectUser];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const handleClick = (userId: number) => {
    router.push(`/users/${userId}`);
  };
  return (
    <Table>
      <TableCaption>Список Пользователей.</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map(({ title, key }) => (
            <TableHeaderCell
              key={key}
              title={title}
              sortKey={key}
              sortConfig={sortConfig}
              onSort={handleSort}
            />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user) => (
          <TableRow
            className="cursor-pointer"
            key={user.email}
            onClick={() => handleClick(user.id)}
          >
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              {user.status === "active" ? (
                <Check color="green" />
              ) : (
                <X color="red" />
              )}
            </TableCell>
            <TableCell>{user.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
