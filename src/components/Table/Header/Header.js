import React, {useState} from 'react';
import {useFilter} from "../TableProvider";
import styles from './styles.module.css';

const arrows = {
    'desc': '▼',
    'asc': '▲'
};

function Header({entry, ...props}) {
    const [sortOrder, updateSortOrder] = useState(null);
    const {setSortOptions} = useFilter();

    function handleClick() {
        let order;

        switch (sortOrder) {
            case 'desc':
                order = 'asc';
                break;
            case 'asc':
                order = null;
                break;
            default:
                order = 'desc';
        }

        // Update local state
        updateSortOrder(order);

        // Update context state
        setSortOptions({order, column: entry.source});
    }

    return (
        <th {...props} onClick={handleClick} className={styles.root}>
            <span>{entry.title}</span>
            {sortOrder && (
                <i className={styles.arrow}>
                    {arrows[sortOrder]}
                </i>
            )}
        </th>
    );
}

export default Header;