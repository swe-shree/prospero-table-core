import * as _tanstack_react_table from '@tanstack/react-table';
import { ColumnDef, SortingState, OnChangeFn, PaginationState, RowSelectionState } from '@tanstack/react-table';

type UseTableCoreProps<TData extends object> = {
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
declare function useTableCore<TData extends object>({ data, columns, sorting, onSortingChange, pagination, onPaginationChange, rowSelection, onRowSelectionChange, enableSorting, enablePagination, enableRowSelection, manualPagination, pageCount, }: UseTableCoreProps<TData>): _tanstack_react_table.Table<TData>;

export { type UseTableCoreProps, useTableCore };
