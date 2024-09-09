"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SelectUser } from "@/db/schemas/users";
import { UserFormValues, userSchema } from "@/lib/zod/schema";
import { createUserAction, updateUserAction } from "@/lib/actions";
import { formFields } from "@/constants";

export function UserForm({ user }: { user?: SelectUser }) {
  const form = useForm<UserFormValues>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
    defaultValues: user
      ? {
          ...user,
          telegram: user.telegram ?? undefined,
        }
      : {
          status: "active",
        },
  });

  const { isDirty, isValid, isSubmitting } = form.formState;

  const onSubmit = async (data: UserFormValues) => {
    if (!user) {
      await createUserAction(data);
    } else {
      const updateUserWithId = updateUserAction.bind(null, user?.id);
      await updateUserWithId(data);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof UserFormValues}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === "select" ? (
                    <Select
                      onValueChange={formField.onChange}
                      defaultValue={formField.value as string}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Статус пользователя" />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...formField}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button disabled={!isDirty || !isValid || isSubmitting} type="submit">
          {isSubmitting ? "Submitting.." : user?.id ? "Update" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
