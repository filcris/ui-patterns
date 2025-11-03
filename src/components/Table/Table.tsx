import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type Column<T> = {
  key: keyof T;
  header: ReactNode;
  className?: string;
  cell?: (value: any, row: T) => ReactNode;
};

type TableProps<T extends Record<string, any>> = HTMLAttributes<HTMLTableElement> & {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  zebra?: boolean;
  density?: "comfortable" | "compact";
  onRowClick?: (row: T) => void;
};

export function Table<T extends Record<string, any>>({
  columns, data, caption, zebra = true, density = "comfortable",
  onRowClick, className, ...rest
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded border border-gray-200 dark:border-gray-700">
      <table
        {...rest}
        className={clsx("min-w-full text-left align-middle bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100", className)}
      >
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((c, i) => (
              <th key={String(c.key)+i} scope="col"
                  className={clsx("px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200", c.className)}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((row, ri) => {
            const clickable = !!onRowClick;
            return (
              <tr key={ri}
                  tabIndex={clickable ? 0 : -1}
                  className={clsx(
                    density === "compact" ? "text-sm" : "text-base",
                    zebra && ri % 2 === 1 ? "bg-gray-50/70 dark:bg-gray-800/60" : undefined,
                    clickable && "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 hover:bg-blue-50/60 dark:hover:bg-blue-900/20"
                  )}
                  onClick={clickable ? () => onRowClick!(row) : undefined}
                  onKeyDown={clickable ? (e) => {
                    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onRowClick!(row); }
                  } : undefined}
                  aria-label={clickable ? "Linha selecionável" : undefined}>
                {columns.map((c, ci) => {
                  const value = row[c.key];
                  return <td key={String(c.key)+ci} className="px-4 py-3">{c.cell ? c.cell(value, row) : String(value)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
