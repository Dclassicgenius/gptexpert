"use server";

import { UserFormValues } from "@/components/UserForm";
import { db } from "@/db";
import { usersTable } from "@/db/schemas/users";
import { ZodError } from "zod";
import { getErrorMessage } from "../utils";
import { redirect } from "next/navigation";

export const getUsersAction = async () => {
  return await db.select().from(usersTable);
};

export const createUserAction = async (formData: UserFormValues) => {
  try {
    const { username, email, password, status, fullName, phone, telegram } =
      formData;

    await db.insert(usersTable).values({
      username,
      email,
      password,
      status,
      fullName,
      phone,
      telegram,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `${issue.code}: ${issue.message}`,
        })),
      };
    }

    return getErrorMessage(error);
  }

  redirect("/");
};
