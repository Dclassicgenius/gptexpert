"use client";

import Link from "next/link";
import { ButtonWithIcon } from "./ButtonWithIcon";
import { RadioButtonGroup } from "./RadioButtonGroup";
import { UsersTable } from "./UsersTable";
import { SelectUser } from "@/db/schemas/users";
import { useState } from "react";

const Dashboard = ({ users }: { users: SelectUser[] }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [status, setStatus] = useState("");

  const handleStatusChange = (status: string) => {
    setStatus(status);
    let filteredData: SelectUser[] = [];

    status === ""
      ? (filteredData = users)
      : (filteredData = users.filter((user) => user.status === status));
    setFilteredUsers(filteredData);
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <Link href="/create-user">
          <ButtonWithIcon />
        </Link>
        <RadioButtonGroup status={status} onStatusChange={handleStatusChange} />
      </div>
      <UsersTable users={filteredUsers} />
    </div>
  );
};

export default Dashboard;
