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
  rowSelection = {},
  onRowSelectionChange,
  enableSorting = true,
  enableRowSelection = true,
  enablePagination = true,
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
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : void 0,
    getPaginationRowModel: enablePagination && !manualPagination ? getPaginationRowModel() : void 0
  });
}
export {
  useTableCore
};
