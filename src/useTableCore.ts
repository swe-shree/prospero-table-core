import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
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
  enablePagination?: boolean;
  enableRowSelection?: boolean;

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
  enablePagination = true,
  enableRowSelection = false,

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

    autoResetPageIndex: false,

    getCoreRowModel: getCoreRowModel(),

    ...(enableSorting && {
      getSortedRowModel: getSortedRowModel(),
    }),

    ...(enablePagination &&
      !manualPagination && {
        getPaginationRowModel: getPaginationRowModel(),
      }),
  });
}