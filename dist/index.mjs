// src/useTableCore.ts
import {
  useReactTable,
  getCoreRowModel,
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
  enableRowSelection = true
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
    autoResetPageIndex: false,
    getCoreRowModel: getCoreRowModel(),
    ...enableSorting && {
      getSortedRowModel: getSortedRowModel()
    }
  });
}
export {
  useTableCore
};
