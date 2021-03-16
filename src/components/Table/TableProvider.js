import React, {createContext, useContext, useState} from 'react';

export const TableContext = createContext(null);

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

function TableProvider({data, children}) {
    const [filterTags, setFilterTags] = useState([]);
    const [sortOptions, setSortOptions] = useState(null);

    let processed = data;

    if (filterTags.length > 0) {
        processed = filterData(data, filterTags)
    }

    if (null !== sortOptions && null !== sortOptions.order) {
        processed = sortData(data, sortOptions);
    }

    return (
        <TableContext.Provider value={{
            data: processed,
            setFilterTags,
            sortOptions,
            setSortOptions
        }}>
            {children}
        </TableContext.Provider>
    );
}

/**
 *
 * @param data
 * @param tags
 * @return {*}
 */
function filterData(data, tags) {
    return data.filter(row => tags.every(v => row.skills.includes(v)));
}

/**
 *
 * @param data
 * @param options
 * @return {array}
 */
function sortData(data, options) {
    return [...data].sort((a, b) => {
        if (a[options.column] < b[options.column]) {
            return options.order === 'desc' ? -1 : 1;
        }
        if (a[options.column] > b[options.column]) {
            return options.order === 'desc' ? 1 : -1;
        }
        return 0;
    });
}

export default TableProvider;