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

  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;

  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  enableRowSelection?: boolean;

  enableSorting?: boolean;
  enablePagination?: boolean;
  enableSearching?: boolean;

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

  globalFilter = "",
  onGlobalFilterChange,

  rowSelection = {},
  onRowSelectionChange,
  enableRowSelection = true,

  enableSorting = true,
  enablePagination = true,
  enableSearching = true,

  manualPagination = false,
  pageCount,
}: UseTableCoreProps<TData>) {
  return useReactTable({
    data,
    columns,

    state: {
      sorting,
      pagination,
      globalFilter,
      rowSelection,
    },

    onSortingChange,
    onPaginationChange,
    onGlobalFilterChange,
    onRowSelectionChange,

    enableSorting,
    enableRowSelection,
    enableSortingRemoval: false,
    enableGlobalFilter: enableSearching,

    manualPagination,
    pageCount,

    getCoreRowModel: getCoreRowModel(),

    ...(enableSorting && {
      getSortedRowModel: getSortedRowModel(),
    }),

    ...(!manualPagination &&
      enablePagination && {
        getPaginationRowModel: getPaginationRowModel(),
      }),
  });
}