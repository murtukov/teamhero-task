import React, {} from 'react';
import Header from "./Header/Header";
import {useTableData} from "./TableProvider";
import styles from './styles.module.css';

function Table({children}) {
    const data    = useTableData();
    const columns = createMapping(children);

    return (
        <table className={styles.root}>
            <thead>
                <tr>
                    {columns.map((entry, i) =>
                        <Header entry={entry} key={i}/>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) =>
                    <tr className={styles.row} key={i}>
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

export default Table;