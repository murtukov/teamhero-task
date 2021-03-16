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
 * Provides sorting options and a handler to update them.
 *
 * @return {*[]}
 */
export function useFilter() {
    return useContext(TableContext);
}

function TableProvider({data, children}) {
    const [filterOptions, setFilterOptions] = useState(null);
    const [sortOptions, setSortOptions]     = useState(null);

    let processed = data;

    if (null !== filterOptions && null !== filterOptions.order) {
        processed = filterData(data, filterOptions)
    }

    if (null !== sortOptions && null !== sortOptions.order) {
        processed = sortData(data, sortOptions);
    }

    return (
        <TableContext.Provider value={{
            data: processed,
            setFilterOptions,
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
 * @param filterOptions
 * @return {*}
 */
function filterData(data, filterOptions) {
    return data;
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