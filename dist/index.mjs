// src/useTableCore.ts
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel
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
  rowSelection = {},
  onRowSelectionChange,
  enableSorting = true,
  enablePagination = true,
  enableRowSelection = false,
  manualPagination = false,
  pageCount
}) {
  return useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
      rowSelection
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
    ...enableSorting && {
      getSortedRowModel: getSortedRowModel()
    },
    ...enablePagination && !manualPagination && {
      getPaginationRowModel: getPaginationRowModel()
    }
  });
}
export {
  useTableCore
};
