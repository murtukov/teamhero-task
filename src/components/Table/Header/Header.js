import React, {useState} from 'react';
import {useSorting} from "../TableProvider";
import {sorting} from "../../../common/constants";
import s from './styles.module.css';

const arrows = {
    [sorting.DESC]: '▼',
    [sorting.ASC]: '▲'
};

function Header({entry, ...props}) {
    const [sortOrder, updateSortOrder] = useState(null);
    const setSortOptions = useSorting();

    function handleClick() {
        let order;

        switch (sortOrder) {
            case sorting.DESC:
                order = sorting.ASC;
                break;
            case sorting.ASC:
                order = null;
                break;
            default:
                order = sorting.DESC;
        }

        // Update local state
        updateSortOrder(order);

        // Update context state
        setSortOptions({order, column: entry.source});
    }

    return (
        <th {...props} onClick={handleClick} className={s.root}>
            <span>{entry.title}</span>
            {sortOrder && (
                <i className={s.arrow}>
                    {arrows[sortOrder]}
                </i>
            )}
        </th>
    );
}

export default Header;