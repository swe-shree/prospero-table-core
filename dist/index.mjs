// src/useTableCore.ts
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table";
function useTableCore({
  data,
  columns,
  sorting = [],
  onSortingChange,
  pagination = {
    pageIndex: 0,
    pageSize: 10
  },
  onPaginationChange,
  globalFilter = "",
  onGlobalFilterChange,
  rowSelection = {},
  onRowSelectionChange,
  enableRowSelection = false,
  enableSorting = true,
  enablePagination = true,
  enableSearching = true
}) {
  return useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
      globalFilter,
      rowSelection
    },
    onSortingChange,
    onPaginationChange,
    onGlobalFilterChange,
    onRowSelectionChange,
    enableSorting,
    enableRowSelection,
    enableSortingRemoval: false,
    enableGlobalFilter: enableSearching,
    getCoreRowModel: getCoreRowModel(),
    ...enableSorting && {
      getSortedRowModel: getSortedRowModel()
    },
    ...enablePagination && {
      getPaginationRowModel: getPaginationRowModel()
    }
  });
}
export {
  useTableCore
};
