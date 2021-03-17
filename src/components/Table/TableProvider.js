import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const TableContext = createContext(null);

function TableProvider({data = [], children}) {
    const [filterTags, setFilterTags] = useState([]);
    const [sortOptions, setSortOptions] = useState(null);

    let processed = data;

    if (filterTags.length > 0) {
        processed = filterData(data, 'skills', filterTags);
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

TableProvider.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Removes objects from array that contain specific tags.
 *
 * @param {object[]} data - Array to remove objects from.
 * @param {array}    tags - List of tags that object must have in order to be removed
 * @param {string}   key  - Object key, under which tags are stored
 *
 * @return {array}
 */
function filterData(data, key, tags) {
    return data.filter(row => tags.every(v => row[key].includes(v)));
}

/**
 * Returns a sorted copy of an array.
 *
 * @param {array}  data    - input array
 * @param {object} options - sorting options
 *
 * @return {array} - sorted copy of passed array
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