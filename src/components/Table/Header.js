import React, {useState, useEffect} from 'react';
import {createUseStyles} from "react-jss";

function Header({children, isSorting, sortHandler, source, ...props}) {
    const [sortOrder, updateSortOrder] = useState(null);
    const c = useStyles(sortOrder);

    useEffect(() => {
        if (false === isSorting) {
            updateSortOrder(null);
        }
    }, [isSorting]);

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

        updateSortOrder(order);
        sortHandler({order, source});
    }

    function renderArrow() {
        switch (sortOrder) {
            case 'desc': return <i className={c.arrow}>▼</i>;
            case 'asc': return <i className={c.arrow}>▲</i>;
            default: return null;
        }
    }

    return (
        <th
            {...props}
            onClick={handleClick}
            className={c.root}
        >
            <span>{children}</span>
            {renderArrow()}
        </th>
    );
}

const useStyles = createUseStyles({
    root: {
        cursor: "pointer",
        textTransform: "uppercase",
        fontSize: 13,
        userSelect: "none"
    },
    arrow: {
        padding: 3,
    }
});

export default Header;