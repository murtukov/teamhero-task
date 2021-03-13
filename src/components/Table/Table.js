import React, {useState, useEffect, useCallback} from 'react';
import {createUseStyles} from "react-jss";
import Header from "./Header";

function Table({data, children}) {
    const classes = useStyles();
    const columns = createMapping(children);
    const [rows, updateRows] = useState(data);
    const [sortOptions, updateSortOptions] = useState(null);

    const sorter = useCallback((a, b) => {
        if (a[sortOptions.source] < b[sortOptions.source]) {
            return sortOptions.order === 'desc' ? -1 : 1;
        }
        if (a[sortOptions.source] > b[sortOptions.source]) {
            return sortOptions.order === 'desc' ? 1 : -1;
        }
        return 0;
    }, [sortOptions]);

    useEffect(() => {
        if (sortOptions && sortOptions?.order) {
            updateRows([...data].sort(sorter));
        }
    }, [sortOptions, data, sorter])

    return (
        <table className={classes.root}>
            <thead>
                <tr>
                    {columns.map((entry, i) =>
                        <Header
                            source={entry.source}
                            isSorting={sortOptions?.source === entry.source}
                            sortHandler={updateSortOptions}
                            key={i}
                        >
                            {entry.title}
                        </Header>
                    )}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) =>
                    <tr className={classes.row} key={i}>
                        {columns.map((entry, j) =>
                            <entry.type
                                data={row[entry.source]}
                                {...entry.props}
                                key={j}
                            />
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

/**
 * @param {JSX.Element[]} elements
 */
function createMapping(elements) {
    return elements.map(({props, type}) => {
        return {
            source: props.source,
            title: props.title,
            isSortable: true,
            props,
            type,
        }
    });
}

const useStyles = createUseStyles({
    root: {
        borderCollapse: "collapse",
        borderRadius: 10,
        fontFamily: "montserrat",
        color: '#444F5F',
        width: 1200,

        '& td, th': {
            textAlign: "left",
            padding: 15,
        }
    },
    row: {
        backgroundColor: "white",
        borderBottom: [1, 'solid', '#eaeaea'],
        '&:last-child': {
            borderBottom: 'none',
        }
    },
});

export default Table;