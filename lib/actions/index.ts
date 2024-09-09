"use server";
import { db } from "@/db";
import { usersTable } from "@/db/schemas/users";
import { redirect } from "next/navigation";
import { eq, desc } from "drizzle-orm";
import { getErrorMessage } from "@/lib/utils";
import { UserFormValues, userSchema } from "@/lib/zod/schema";

export const getUsersAction = async () => {
  try {
    return await db
      .select()
      .from(usersTable)
      .orderBy(desc(usersTable.createdAt), desc(usersTable.id));
  } catch (error) {
    return getErrorMessage(error);
  }
};

const CreateUser = userSchema.omit({
  id: true,
});

export const createUserAction = async (formData: UserFormValues) => {
  try {
    const { username, email, password, status, fullName, phone, telegram } =
      CreateUser.parse(formData);

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
    return getErrorMessage(error);
  }

  redirect("/");
};

export const getUserAction = async (userId: number) => {
  try {
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId));

    if (!result.length) {
      return { status: "error", message: "Пользователь не найден" };
    }

    return result[0];
  } catch (error) {
    return getErrorMessage(error);
  }
};

export const updateUserAction = async (
  userId: number,
  formData: UserFormValues
) => {
  try {
    const { username, email, password, status, fullName, phone, telegram } =
      formData;

    await db
      .update(usersTable)
      .set({
        username,
        email,
        password,
        status,
        fullName,
        phone,
        telegram,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(usersTable.id, userId));
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/");
};
