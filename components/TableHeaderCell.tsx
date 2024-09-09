import { TableHead } from "@/components/ui/table";
import { ArrowUp, ArrowDown } from "lucide-react";

interface TableHeaderCellProps {
  title: string;
  sortKey: string;
  sortConfig: { key: string; direction: string } | null;
  onSort: (key: string) => void;
}

export function TableHeaderCell({
  title,
  sortKey,
  sortConfig,
  onSort,
}: TableHeaderCellProps) {
  return (
    <TableHead
      onClick={() => onSort(sortKey)}
      className="cursor-pointer  text-muted-foreground"
    >
      <span className={`flex items-center gap-2`}>
        {title}{" "}
        {sortConfig?.key === sortKey &&
          (sortConfig.direction === "ascending" ? (
            <ArrowUp height={"14"} width={"14"} />
          ) : (
            <ArrowDown height={"14"} width={"14"} />
          ))}
      </span>
    </TableHead>
  );
}
