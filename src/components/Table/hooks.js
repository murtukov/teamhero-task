import {useContext} from 'react';
import {TableContext} from "./TableProvider";

/**
 * Provides filtered and sorted table data.
 *
 * @return {array}
 */
export function useTableData() {
    return useContext(TableContext).data;
}

/**
 *
 * @return {(value: any) => void}
 */
export function useTagsFilter() {
    return useContext(TableContext).setFilterTags;
}

export function useSorting() {
    return useContext(TableContext).setSortOptions;
}