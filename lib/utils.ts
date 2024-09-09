import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = "Что-то пошло не так"
) => {
  if (error instanceof ZodError) {
    return {
      status: "error",
      message: "Некорректные данные в форме",
      errors: error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: `${issue.code}: ${issue.message}`,
      })),
    };
  }

  console.error(error);
  let errorMessage = defaultMessage;
  if (error instanceof Error && error.message.length < 100) {
    errorMessage = error.message;
  }
  return errorMessage;
};
