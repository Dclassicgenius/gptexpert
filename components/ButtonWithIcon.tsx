import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonWithIcon() {
  return (
    <Button>
      <Plus className="mr-2 h-4 w-4" /> Добавить пользователя
    </Button>
  );
}
