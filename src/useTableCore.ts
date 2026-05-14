import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  type PaginationState,
  type RowSelectionState,
  type OnChangeFn,
} from "@tanstack/react-table";

export type UseTableCoreProps<TData extends object> = {
  data: TData[];
  columns: ColumnDef<TData>[];

  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;

  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;

  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;

  enableSorting?: boolean;
  enableRowSelection?: boolean;
  enablePagination?: boolean;

  manualPagination?: boolean;
  pageCount?: number;
};

export function useTableCore<TData extends object>({
  data,
  columns,

  sorting = [],
  onSortingChange,

  pagination = {
    pageIndex: 0,
    pageSize: 10,
  },
  onPaginationChange,

  rowSelection = {},
  onRowSelectionChange,

  enableSorting = true,
  enableRowSelection = true,
  enablePagination = true,

  manualPagination = false,
  pageCount,
}: UseTableCoreProps<TData>) {
  return useReactTable({
    data,
    columns,

    state: {
      sorting,
      pagination,
      rowSelection,
    },

    onSortingChange,
    onPaginationChange,
    onRowSelectionChange,

    enableSorting,
    enableRowSelection,

    manualPagination,
    pageCount,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,

    getPaginationRowModel:
      enablePagination && !manualPagination
        ? getPaginationRowModel()
        : undefined,
  });
}